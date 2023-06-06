import React, { Suspense, useEffect, useState } from "react";
import useSWR from "swr";
import VocabStyles from "./vocab.module.css";
import { vocabFetcher } from "../../libs/fetcher";
import SearchIllustration from "../../assets/dictionary-searching.png"
import { useMemo } from "react";
import { toast } from 'react-hot-toast';

function VocabPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [requestSearchQuery, setRequestSearchQuery] = useState("");

    return (
        <div className={VocabStyles.vocab_container}>
            {/* Search bar */}
            <form
                className={VocabStyles.search_container}
                onSubmit={(e) => {
                    e.preventDefault();
                    setRequestSearchQuery(searchQuery);
                }}
            >
                <button
                    type="submit"
                >
                    <svg
                        className={VocabStyles.search_icon}
                        width="20"
                        height="15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-labelledby="search"
                    >
                        <path
                            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                            stroke="currentColor"
                            strokeWidth="1.333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </button>
                <input
                    value={searchQuery}
                    className={VocabStyles.search_input}
                    placeholder="Search vocabulary"
                    type="text"
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    className={VocabStyles.reset_button}
                    type="reset"
                    onClick={() => setSearchQuery("")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={`${searchQuery === "" ? "0" : "16"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
            </form>

            {requestSearchQuery === "" ? (
                <div className={VocabStyles.pending}>
                    <img
                        src={SearchIllustration}
                        alt="Searching dictionary illustration"
                    />
                    <p>
                        Type the word in search bar and press Enter. <br />
                        The definition will be displayed auto-magically.
                    </p>
                </div>
            ) : (
                    <Suspense fallback={<div>Loading...</div>}>
                            <VocabList vocab={requestSearchQuery} />
                        </Suspense> 
            )}
        </div>
    );
}

function VocabList({ vocab }) {
    const { data } = useSWR(vocab, (word) => vocabFetcher(word), {
        suspense: true,
    });
    const [error, setError] = useState("");

    const groupedData = useMemo(() => {
        setError('');
        if (data === 404) {
            setError(`Can't find the definition of "${vocab}"`)
            return
        }
        return groupData(data);
    }, [data, vocab])

    function groupData(data) {
        console.log(data)
        const groupedJson = {};
        for (const item of data) {
            const meanings = item.meanings;
            for (const meaning of meanings) {
                const partOfSpeech = meaning.partOfSpeech;
                if (!groupedJson[partOfSpeech]) {
                    groupedJson[partOfSpeech] = {
                        word: item.word,
                        phonetic: item.phonetic,
                        phonetics: item.phonetics?.map((phoneticSource) => {
                            return {
                                text: phoneticSource?.text,
                                audio: phoneticSource?.audio,
                            };
                        }),
                        meanings: [],
                    };
                }
                groupedJson[partOfSpeech].meanings.push(meaning);
            }
        }
        return groupedJson;
    }

    return (
        <div className={VocabStyles.vocab_list_container}>
            {groupedData === undefined ? (<p>{error}</p>) : (
                Object.keys(groupedData).map((partOfSpeech, index) => (
                    <VocabCard
                        key={index}
                        partOfSpeech={partOfSpeech}
                        word={groupedData[partOfSpeech]["word"]}
                        phonetics={groupedData[partOfSpeech]["phonetics"]}
                        meanings={groupedData[partOfSpeech]["meanings"]}
                    />
                ))
                )}
        </div>
    );
}

function VocabCard({ partOfSpeech, word, phonetics, meanings }) {
    return (
        <div className={VocabStyles.vocab_card}>
            {/* Vocab header */}
            <div className={VocabStyles.vocab_card_header_background}>
                <div className={VocabStyles.vocab_card_header}>
                    <div>
                        <h4>{word}</h4>
                        {phonetics.map((phonetic) => {
                            if (phonetic.audio !== "") {
                                return (
                                    <div
                                        className={VocabStyles.vocab_phonetic}
                                        key={phonetic.audio}
                                    >
                                        <button className={`icon_button`}>
                                            <span class="material-symbols-outlined">
                                                volume_up
                                            </span>
                                        </button>
                                        <p>
                                            {phonetic.audio
                                                .slice(-6, -4)
                                                .toUpperCase()}
                                        </p>
                                        <p>{phonetic.text}</p>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <p>
                        <i>{partOfSpeech}</i>
                    </p>
                </div>
            </div>

            {/* Definition List */}
            {meanings.map((meaning) =>
                meaning.definitions.map((definition) => {
                    return (
                        <div className={VocabStyles.vocab_definition}>
                            <h3>{definition.definition}</h3>
                            {definition.example !== undefined && (
                                <li>{definition.example}</li>
                            )}
                            <hr className={VocabStyles.divider} />
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default VocabPage;
