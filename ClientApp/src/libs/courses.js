import Quote from "../components/Quote/index";
import { Note } from "../pages/Course/index";
import Styles from "../pages/Course/Course.module.css";
import { randomBackground } from "../utils/background";
import MinionImage from "../assets/courseImages/ed-ing-minion.jpg"

export const allCourses = [
    {
        id: "differences-between-ed-and-ing",
        level: "Beginner",
        type: "Grammar",
        title: "Differences Between 'ed' and 'ing'. Adjectives ending in 'ed' and 'ing'",
        image: randomBackground(),
        estimateTime: "6-10",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id='title-1'>Differences Between 'ed' and 'ing'. Adjectives ending in 'ed' and 'ing'</h1>
                <p>Do you know the difference between bored and boring? Test what you know with interactive exercises and read the explanation to help you.</p>

                <Note mistakeNote>
                    One common mistake is to think that adjectives that end in -ed are only used to describe things in the past, and adjectives that end -ing are used to describe things in the present.
                </Note>

                <p>Look at these examples to see how adjectives ending in <b><i>-ed</i></b> and <b><i>-ing</i></b> are used:</p>
                <Quote>
                    <p>• I was really bored in that presentation.</p>
                    <p>• That was a really boring presentation.</p>
                </Quote>

                <img
                    src={MinionImage}
                    alt="Minion image"
                />

                <h2 id='title-2'>-ed Adjectives</h2>
                <p>Adjectives that end in <b><i>-ed</i></b> generally describe emotions – they tell us how people feel. <br /> For example:</p>
                <Quote>
                    <p>• I was so bored in that lesson, I almost fell asleep.</p>
                    <p>• He was surprised to see Helen after all those years.</p>
                    <p>• She was really tired and went to bed early.</p>
                </Quote>

                <h2 id='title-3'>-ing Adjectives</h2>
                <p>Adjectives that end in <b><i>-ing</i></b> generally describe the thing that causes the emotion – a boring lesson makes you feel bored.</p>
                <Quote>
                    <p>• Have you seen that film? It's really frightening.</p>
                    <p>• I could listen to her for hours. She's so interesting.</p>
                </Quote>
            </div>
        ),
        questions: [
            {
                question: "1. I love skydiving. It's an ________ feeling.",
                choices: [
                    { isAnswer: true, label: "amazing" },
                    { isAnswer: false, label: "amazed" },
                ]
            },
            {
                question: "2. The robber was carrying a gun and wearing the mask of a clown. He was _______.",
                choices: [
                    { isAnswer: false, label: "terrified" },
                    { isAnswer: true, label: "terrifying" },
                ]
            },
            {
                question: "3. She was very ______ with him for not telling her the truth.",
                choices: [
                    { isAnswer: false, label: "annoying" },
                    { isAnswer: true, label: "annoyed" },
                ]
            },
        ]
    },
    {
        id: "general-vocabulary-use",
        level: "Beginner",
        type: "Vocabulary",
        title: "General Vocabulary Use",
        image: randomBackground(),
        estimateTime: "5-10",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">General Vocabulary Use</h1>
                <p>The following are 10 vocab for everyday use by beginners, with English explanations, pronunciations and examples:</p>

                <h2 id="title-2">Vocabulary List</h2>

                <h2 id="title-3">Accomplish (v.)</h2>
                <i>/əˈkʌmplɪʃ/</i>
                <Quote>
                    <p>Mean: To successfully complete a task or goal</p>
                    <p>Example: She was able to accomplish all of her homework before dinner.</p>
                </Quote>

                <h2 id="title-4">Apologize (v.)</h2>
                <i>/əˈpɒlədʒaɪz/</i>
                <Quote>
                    <p>Mean: To express regret or say sorry for doing something wrong or causing trouble</p>
                    <p>Example: She apologized for being late to the meeting.</p>
                </Quote>

                <h2 id="title-5">Compliment (v.)</h2>
                <i>/ˈkɒmplɪmənt/</i>
                <Quote>
                    <p>Mean: To say something nice or positive about someone or something</p>
                    <p>Example: She complimented her friend's new dress.</p>
                </Quote>

                <h2 id="title-6">Confused (adj.)</h2>
                <i>/kənˈfjuːzd/</i>
                <Quote>
                    <p>Mean: To feel uncertain or not sure about something, or to misunderstand something</p>
                    <p>Example: He was confused about the instructions.</p>
                </Quote>

                <h2 id="title-7">Embarrassed (adj.)</h2>
                <i>/ɪmˈbærəst/</i>
                <Quote>
                    <p>Mean: To feel uncomfortable, self-conscious or ashamed about something</p>
                    <p>Example: She was embarrassed when she spilled coffee on her shirt.</p>
                </Quote>

                <h2 id="title-8">Excited (adj.)</h2>
                <i>/ɪkˈsaɪtɪd/</i>
                <Quote>
                    <p>Mean: To feel happy, enthusiastic or eager about something</p>
                    <p>Example: He was excited to start his new job.</p>
                </Quote>

                <h2 id="title-9">Grateful (adj.)</h2>
                <i>/ˈɡreɪtfʊl/</i>
                <Quote>
                    <p>Mean: To feel thankful or appreciative of something or someone</p>
                    <p>Example: She was grateful for the help she received.</p>
                </Quote>

                <h2 id="title-10">Respect (v.)</h2>
                <i>/rɪˈspɛkt/</i>
                <Quote>
                    <p>Mean: To have admiration or high regard for someone or something, or to treat someone or something with politeness and consideration</p>
                    <p>Example: He respected his boss's decision.</p>
                </Quote>

            </div>
        ),
        questions: [
            {
                question: "1. She was able to ________ all of her tasks before lunchtime.",
                choices: [
                    { isAnswer: true, label: "accomplish" },
                    { isAnswer: false, label: "confused" },
                    { isAnswer: false, label: "grateful" },
                ]
            },
            {
                question: "2. He felt very ________ after he realized he had forgotten his best friend's birthday.",
                choices: [
                    { isAnswer: false, label: "embarrassed" },
                    { isAnswer: true, label: "apologized" },
                    { isAnswer: false, label: "excited" },
                ]
            },
            {
                question: "3. I'm feeling a little ________ about the instructions. Could you explain them again?",
                choices: [
                    { isAnswer: true, label: "confused" },
                    { isAnswer: false, label: "accomplished" },
                    { isAnswer: false, label: "respectful" },
                ]
            },
            {
                question: "4. The waiter ________ the customer on his excellent taste in wine.",
                choices: [
                    { isAnswer: false, label: "embarrassed" },
                    { isAnswer: false, label: "apologized" },
                    { isAnswer: true, label: "complimented" },
                ]
            },
        ],
        next: "action-vocabulary",
    },
    {
        id: "action-vocabulary",
        level: "Intermediate",
        type: "Vocabulary",
        title: "Action Vocabulary",
        image: randomBackground(),
        estimateTime: "5-10",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">Intermediate Action Vocabulary</h1>
                <p>The following are 8 intermediate-level action vocabulary words:</p>

                <h2 id="title-2">Execute (v.)</h2>
                <i>/ˈɛksɪˌkjut/</i>
                <Quote>
                    <p>Mean: To carry out or accomplish a plan, task, or action</p>
                    <p>Example: He executed the project successfully.</p>
                </Quote>

                <h2 id="title-3">Pursue (v.)</h2>
                <i>/pərˈsu/</i>
                <Quote>
                    <p>Mean: To follow or chase after something in order to achieve it</p>
                    <p>Example: She decided to pursue a career in music.</p>
                </Quote>

                <h2 id="title-4">Initiate (v.)</h2>
                <i>/ɪˈnɪʃiˌeɪt/</i>
                <Quote>
                    <p>Mean: To start or begin something</p>
                    <p>Example: He initiated the conversation by introducing himself.</p>
                </Quote>

                <h2 id="title-5">Allocate (v.)</h2>
                <i>/ˈæləˌkeɪt/</i>
                <Quote>
                    <p>Mean: To distribute or assign resources or tasks</p>
                    <p>Example: The manager allocated the budget for different departments.</p>
                </Quote>

                <h2 id="title-6">Coordinate (v.)</h2>
                <i>/koʊˈɔrdəˌneɪt/</i>
                <Quote>
                    <p>Mean: To organize or synchronize activities or efforts</p>
                    <p>Example: The team coordinated their efforts to complete the project.</p>
                </Quote>

                <h2 id="title-7">Facilitate (v.)</h2>
                <i>/fəˈsɪləˌteɪt/</i>
                <Quote>
                    <p>Mean: To make a process or task easier or smoother</p>
                    <p>Example: The new software facilitated the data analysis.</p>
                </Quote>

                <h2 id="title-8">Optimize (v.)</h2>
                <i>/ˈɑptəˌmaɪz/</i>
                <Quote>
                    <p>Mean: To make the best or most effective use of something</p>
                    <p>Example: The company optimized their website for better user experience.</p>
                </Quote>

                <h2 id="title-9">Implement (v.)</h2>
                <i>/ˈɪmpləˌmɛnt/</i>
                <Quote>
                    <p>Mean: To put into action or carry out a plan or idea</p>
                    <p>Example: They implemented a new training program for employees.</p>
                </Quote>
            </div>
        ),
        questions: [
            {
                question: "1. What does it mean to carry out or accomplish a plan, task, or action?",
                choices: [
                    { isAnswer: true, label: "Execute" },
                    { isAnswer: false, label: "Pursue" },
                    { isAnswer: false, label: "Initiate" },
                ]
            },
            {
                question: "2. Which word describes the act of following or chasing after something in order to achieve it?",
                choices: [
                    { isAnswer: false, label: "Allocate" },
                    { isAnswer: true, label: "Pursue" },
                    { isAnswer: false, label: "Coordinate" },
                ]
            },
            {
                question: "3. When someone starts or begins something, they are said to ________ it.",
                choices: [
                    { isAnswer: false, label: "Facilitate" },
                    { isAnswer: false, label: "Optimize" },
                    { isAnswer: true, label: "Initiate" },
                ]
            },
            {
                question: "4. What word describes the action of putting into action or carrying out a plan or idea?",
                choices: [
                    { isAnswer: false, label: "Implement" },
                    { isAnswer: true, label: "Execute" },
                    { isAnswer: false, label: "Facilitate" },
                ]
            },
        ],
        previous: "general-vocabulary-use",
        next: "advanced-vocabulary-use"
    },
    {
        id: "advanced-vocabulary-use",
        level: "Advanced",
        type: "Vocabulary",
        title: "Advanced Vocabulary Use",
        image: randomBackground(),
        estimateTime: "6-13",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">Advanced Vocabulary Use</h1>
                <p>The following are 7 advanced-level vocabulary words along with their meanings, pronunciations, and example sentences:</p>

                <h2 id="title-2">Vocabulary List</h2>

                <h2 id="title-3">Prolific</h2>
                <i>/prəˈlɪfɪk/</i>
                <Quote>
                    <p>Mean: Producing many works, results, or offspring; highly productive or fertile</p>
                    <p>Example: The author is known for her prolific writing career, having published over 20 novels.</p>
                </Quote>

                <h2 id="title-4">Euphoric</h2>
                <i>/juːˈfɔːrɪk/</i>
                <Quote>
                    <p>Mean: Intensely happy or joyful</p>
                    <p>Example: Winning the championship brought a euphoric feeling to the entire team.</p>
                </Quote>

                <h2 id="title-5">Idiosyncratic</h2>
                <i>/ˌɪdiəsɪŋˈkrætɪk/</i>
                <Quote>
                    <p>Mean: Peculiar or individualistic; having unique or distinctive characteristics</p>
                    <p>Example: His idiosyncratic fashion sense always stood out in a crowd.</p>
                </Quote>

                <h2 id="title-6">Melancholic</h2>
                <i>/ˌmɛlənˈkɑːlɪk/</i>
                <Quote>
                    <p>Mean: Feeling or expressing sadness or pensive sorrow</p>
                    <p>Example: The melancholic music evoked memories of lost love.</p>
                </Quote>

                <h2 id="title-7">Ineffable</h2>
                <i>/ɪnˈɛfəbəl/</i>
                <Quote>
                    <p>Mean: Too great, powerful, or beautiful to be described or expressed in words</p>
                    <p>Example: The breathtaking view from the mountaintop was ineffable.</p>
                </Quote>

                <h2 id="title-8">Ubiquitous</h2>
                <i>/juːˈbɪkwɪtəs/</i>
                <Quote>
                    <p>Mean: Present, appearing, or found everywhere</p>
                    <p>Example: Mobile phones have become ubiquitous in today's society.</p>
                </Quote>

                <h2 id="title-9">Surreptitious</h2>
                <i>/ˌsʌrəpˈtɪʃəs/</i>
                <Quote>
                    <p>Mean: Kept secret, especially because it would not be approved of</p>
                    <p>Example: He made a surreptitious exit from the party to avoid being noticed.</p>
                </Quote>
            </div>
        ),
        questions: [
            {
                question: "1. What word describes the feeling of intense happiness or joy?",
                choices: [
                    { isAnswer: false, label: "Prolific" },
                    { isAnswer: true, label: "Euphoric" },
                    { isAnswer: false, label: "Idiosyncratic" },
                ]
            },
            {
                question: "2. If something is too great or beautiful to be expressed in words, it can be described as ________.",
                choices: [
                    { isAnswer: true, label: "Ineffable" },
                    { isAnswer: false, label: "Melancholic" },
                    { isAnswer: false, label: "Ubiquitous" },
                ]
            },
            {
                question: "3. Which word refers to something that is kept secret, especially because it would not be approved of?",
                choices: [
                    { isAnswer: false, label: "Surreptitious" },
                    { isAnswer: false, label: "Initiate" },
                    { isAnswer: true, label: "Idiosyncratic" },
                ]
            },
            {
                question: "4. What adjective describes a person or thing that is present, appearing, or found everywhere?",
                choices: [
                    { isAnswer: false, label: "Euphoric" },
                    { isAnswer: true, label: "Ubiquitous" },
                    { isAnswer: false, label: "Prolific" },
                ]
            },
        ],
        previous: "action-vocabulary",
    },
    {
        id: "reading-exercises-I",
        level: "Beginner",
        type: "Reading",
        title: "Reading Exercises I",
        image: randomBackground(),
        estimateTime: "10-15",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">Reading Exercises I</h1>
                <p>Please read the following text and try to answer the questions.</p>

                <h2 id="title-2">Why does coffee shoot out of the lid of your cup?</h2>
                <p className={Styles.reading_txt}>You're running late for work and you've purchased your coffee in a hurry. Just as you arrive at the office, a jet of hot liquid escapes from the tiny hole in the lid, leaving you with hot beverage residue on your clothes before the day has really started.</p>
                <p className={Styles.reading_txt}>This is exactly what happened to Rob Kaczmarek after buying a cup of his favourite caffeinated drink. The marketing director at Convergent Science was intrigued by why the coffee shoots out so far and therefore set about modelling this, initially as a joke for those who enjoy a bit of computational fluid dynamics. It's the design of the lid that's the problem, he explains.</p>
                <p className={Styles.reading_txt}>"It happens because of the sloshing of the coffee against the lid, which is kind of unique. At the end of the lid, the hole is right up above that. As the coffee sloshes against the end of the lid, that velocity is amplified and it splashes up through the actual hole."</p>
                <p className={Styles.reading_txt}>Not all coffee cups are designed with a hole, of course. Some have lids with a tiny hole and others peel back to reveal a much larger gap, which offsets the shooting jets of hot liquid.</p>


                <h2 id="title-3">Word Checker</h2>
                <Quote>
                    <p>Computational fluid dynamics (noun): A branch of fluid mechanics that utilizes numerical methods and algorithms to analyze and solve problems associated with fluid flow.</p>
                    <p>Sloshing (noun): The movement or oscillation of liquid inside a container, often caused by external forces or disturbances.</p>
                    <p>Amplified (verb): Increased in intensity or magnitude. In this context, it describes the process by which the velocity of the coffee is heightened or enhanced as it interacts with the end of the lid.</p>
                    <p>Offsets (verb): To counterbalance or counteract. In this context, it suggests that the presence of a larger gap in some coffee cup lids helps counter the forceful release of hot liquid.</p>
                </Quote>

            </div>
        ),
        questions: [
            {
                question: "1. What accident might occur at work in the morning, after you bought coffee?",
                choices: [
                    { isAnswer: false, label: "You spill it all over the place accidently." },
                    { isAnswer: false, label: "You get burns from the hot coffee." },
                    { isAnswer: true, label: "You contaminate your clothes with it" },
                ]
            },
            {
                question: "2. Rob Kaczmarek explains to us that:",
                choices: [
                    { isAnswer: false, label: "He sat his experiment as a joke." },
                    { isAnswer: false, label: "He was really intrigued by spilling the coffee.." },
                    { isAnswer: true, label: "Coffee spils because of the design of the lid." },
                ]
            },
            {
                question: "3. The main reason coffee spils is:",
                choices: [
                    { isAnswer: false, label: "Velocity" },
                    { isAnswer: true, label: "Sloshing" },
                    { isAnswer: false, label: " Design of the cup" },
                ]
            },
            {
                question: "4. This text might be classified as:",
                choices: [
                    { isAnswer: true, label: "Scientific" },
                    { isAnswer: false, label: "Humorous" },
                    { isAnswer: false, label: "Romantic" },
                ]
            },
        ],
        next: "reading-exercises-II"
    },
    {
        id: "reading-exercises-II",
        level: "Intermediate",
        type: "Reading",
        title: "Reading Exercises II",
        image: randomBackground(),
        estimateTime: "10-15",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">Reading Exercises II</h1>
                <p>Please read the following text and try to answer the questions.</p>
                <h2 id="title-2">The Benefits of Bilingualism</h2>
                <p className={Styles.reading_txt}>Bilingualism, the ability to speak two languages fluently, has numerous benefits. Research has shown that bilingual individuals have improved cognitive abilities, such as enhanced problem-solving skills and better mental flexibility. Moreover, bilingualism can provide social and cultural advantages, allowing individuals to communicate with a wider range of people and access diverse perspectives.</p>
                <p className={Styles.reading_txt}>One of the cognitive benefits of bilingualism is increased executive function. Bilinguals often exhibit better attention control and task-switching abilities, as they constantly switch between two languages. This heightened cognitive control can have positive effects on various aspects of life, including academic performance and professional success.</p>
                <p className={Styles.reading_txt}>Additionally, bilingualism has been linked to improved memory and brain health. Studies have found that bilingual individuals have a higher density of gray matter in the brain regions associated with language processing and executive function. This structural difference may contribute to better memory skills and a reduced risk of cognitive decline and neurodegenerative diseases later in life.</p>
                <p className={Styles.reading_txt}>The social and cultural advantages of bilingualism are equally significant. Bilingual individuals can connect with people from different linguistic and cultural backgrounds, fostering cross-cultural understanding and empathy. They can also easily navigate different environments, whether it's traveling to foreign countries or engaging in multicultural communities.</p>

                <h2 id="title-3">Word Checker</h2>
                <Quote>
                    <p>Bilingualism (noun): The ability to speak two languages fluently.</p>
                    <p>Cognitive (adjective): Related to mental processes, such as thinking, learning, and remembering.</p>
                    <p>Executive function (noun): The cognitive processes that help with goal-setting, planning, decision-making, and self-control.</p>
                    <p>Gray matter (noun): The darker tissue of the brain and spinal cord, consisting mainly of nerve cell bodies and branching dendrites.</p>
                    <p>Cross-cultural (adjective): Involving or bridging different cultures.</p>
                    <p>Neurodegenerative (adjective): Relating to the progressive loss of structure or function of neurons, including diseases like Alzheimer's and Parkinson's.</p>
                </Quote>

            </div>
        ),
        questions: [
            {
                question: "1. What is one of the cognitive benefits of bilingualism mentioned in the article?",
                choices: [
                    { isAnswer: false, label: "Increased memory capacity" },
                    { isAnswer: true, label: "Enhanced problem-solving skills" },
                    { isAnswer: false, label: "Improved physical health" },
                ],
            },
            {
                question: "2. How does bilingualism contribute to better memory skills and brain health?",
                choices: [
                    { isAnswer: false, label: "By reducing executive function" },
                    { isAnswer: true, label: "By increasing gray matter density in language regions" },
                    { isAnswer: false, label: "By improving attention control in monolingual individuals" },
                ],
            },
            {
                question: "3. What is one of the social advantages of being bilingual?",
                choices: [
                    { isAnswer: false, label: "Limited cultural understanding" },
                    { isAnswer: false, label: "Difficulty in navigating different environments" },
                    { isAnswer: true, label: "Ability to connect with people from diverse backgrounds" },
                ],
            },
            {
                question: "4. According to the article, how does bilingualism impact academic and professional success?",
                choices: [
                    { isAnswer: false, label: "It has no effect on performance" },
                    { isAnswer: false, label: "It leads to reduced cognitive abilities" },
                    { isAnswer: true, label: "It improves cognitive control and task-switching abilities" },
                ],
            },
        ],
        previous: "reading-exercises-II",
        next: "reading-exercises-I",
    },
    {
        id: "reading-exercises-III",
        level: "Advanced",
        type: "Reading",
        title: "Reading Exercises III",
        image: randomBackground(),
        estimateTime: "15-20",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">Reading Exercises II</h1>
                <p>Please read the following text and try to answer the questions.</p>

                <h2 id="title-2">Natural Habitats</h2>
                <p className={Styles.reading_txt}>Every living thing has a particular place in which it lives, and we call this place its habitat. A good habitat provides everything an organism needs to survive. It provides food and shelter, places for breeding or laying eggs, the right kind of climate, and so on. Every particular type of organism, or species, needs a particular type of natural habitat. For some species it could be deep in a forest, while for others it could be deep in the ocean. No matter what type of habitat a species needs, it will have to share it with other species who have adapted to the same kind of natural environment.</p>
                <p className={Styles.reading_txt}>When many species share a particular habitat, some species will be food for other species, which in turn might be food for others even higher up the food chain. Food chains are just one of many relationship networks within a habitat that together form what we call an ecosystem. As such, every species becomes part of an ecosystem within its particular habitat. Lions, for example, live in habitats across the grasslands of central Africa. They are apex predators, which means they are at the top of the food chain in their ecosystem. The food chains that lions are part of include various grasses and other plants eaten by the animals that lions eat, such as zebras, buffaloes and giraffes.</p>
                <p className={Styles.reading_txt}>Habitats are often divided into three main types: terrestrial, freshwater and marine. Terrestrial habitats are places on land like forests, woodlands, grasslands and deserts, while freshwater habitats include rivers, lakes, ponds and inland swamps and marshes. Marine habitats include all those places that are part of the world's oceans such as coastal rock pools, coral reefs, open seas far from land, and seabeds on the ocean floor.</p>
                <p className={Styles.reading_txt}>Habitats can also be put into categories based on climate type. For example, polar bears and emperor penguins live in very cold polar habitats, while gorillas and orangutans live in much warmer tropical habitats. Even though gorillas inhabit mountain forests in equatorial Africa and orangutans live in the rainforests of equatorial southeast Asia, both can be said to live in tropical habitats. Habitats can also be put into categories based on vegetation type. For example, we can also say orangutans live in rainforest habitats, while lions live in grassland habitats.</p>
                <p className={Styles.reading_txt}>No matter what kind of habitat we're talking about, we can be sure it contains many species that each form part of a complex ecosystem. An ecosystem in a terrestrial habitat usually involves a wide range of species including plants, animals, birds, insects and microorganisms in the soil. These organisms are linked in a variety of ways. Animals might eat other animals, or they might depend on plants for food. And the plants might depend on nutrients in the soil from the waste of these animals. Microorganisms might depend on dead bodies for food, and insects might play an essential role in the pollination of certain plants. If the insects disappear, the plants will eventually disappear as well if they can't produce seeds. And birds that depend on these plants for food as well as nest-building materials might also disappear, and so on.</p>
                <p className={Styles.reading_txt}>All of these connections among organisms in a habitat form an ecosystem, and while some organisms might survive changes to their ecosystem, many may not. The most vulnerable might even become endangered if important habitats are damaged or lost.</p>

                <h2 id="title-3">Word Checker</h2>
                <Quote>
                    <p>breeding (noun): the process by which organisms reproduce</p>
                    <p>coral reef (noun): a marine habitat around rock-like calcium formations created by colonies of living coral</p>
                    <p>marsh (noun): an area of soft, wet land that often floods during high tides or the rainy season</p>
                    <p>orangutan (noun): a large ape with long red hair and long arms that inhabits the jungles of Borneo and Sumatra</p>
                    <p>terrestrial (adjective): on or related to the Earth's land (as opposed to the sea or the sky) </p>
                </Quote>

            </div>
        ),
        questions: [
            {
                question: "1. A habitat is the _______ in which something lives.",
                choices: [
                    { isAnswer: false, label: "way" },
                    { isAnswer: false, label: "time" },
                    { isAnswer: true, label: "place" },
                ]
            },
            {
                question: "2. Which is most likely to be an apex predator?",
                choices: [
                    { isAnswer: false, label: "a tuna fish" },
                    { isAnswer: false, label: "a piranha fish" },
                    { isAnswer: true, label: "a killer whale" },
                ]
            },
            {
                question: "3. What type of habitat is a river?",
                choices: [
                    { isAnswer: false, label: "terrestrial" },
                    { isAnswer: true, label: "freshwater" },
                    { isAnswer: false, label: "marine" },
                ]
            },
            {
                question: "4. Which lives in a polar habitat?",
                choices: [
                    { isAnswer: false, label: "the polecat" },
                    { isAnswer: false, label: "the snow leopard" },
                    { isAnswer: true, label: "the emperor penguin" },
                ]
            },
            {
                question: "5. If many of its habitats are lost, a species can become",
                choices: [
                    { isAnswer: false, label: "invisible" },
                    { isAnswer: true, label: "endangered" },
                    { isAnswer: false, label: "dangerous" },
                ]
            },
        ],
        previous: "reading-exercises-II",
    },
    //👇这边开始
    {
        id: "what-is-a-verb",
        level: "Beginner",
        type: "Verb",
        title: "What is a verb",
        image: randomBackground(),
        estimateTime: "15-20",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">Reading Exercises II</h1>
                <p>Please read the following text and try to answer the questions.</p>

                <h2 id="title-2">Natural Habitats</h2>
                <p className={Styles.reading_txt}>Every living thing has a particular place in which it lives, and we call this place its habitat. A good habitat provides everything an organism needs to survive. It provides food and shelter, places for breeding or laying eggs, the right kind of climate, and so on. Every particular type of organism, or species, needs a particular type of natural habitat. For some species it could be deep in a forest, while for others it could be deep in the ocean. No matter what type of habitat a species needs, it will have to share it with other species who have adapted to the same kind of natural environment.</p>
                <p className={Styles.reading_txt}>When many species share a particular habitat, some species will be food for other species, which in turn might be food for others even higher up the food chain. Food chains are just one of many relationship networks within a habitat that together form what we call an ecosystem. As such, every species becomes part of an ecosystem within its particular habitat. Lions, for example, live in habitats across the grasslands of central Africa. They are apex predators, which means they are at the top of the food chain in their ecosystem. The food chains that lions are part of include various grasses and other plants eaten by the animals that lions eat, such as zebras, buffaloes and giraffes.</p>
                <p className={Styles.reading_txt}>Habitats are often divided into three main types: terrestrial, freshwater and marine. Terrestrial habitats are places on land like forests, woodlands, grasslands and deserts, while freshwater habitats include rivers, lakes, ponds and inland swamps and marshes. Marine habitats include all those places that are part of the world's oceans such as coastal rock pools, coral reefs, open seas far from land, and seabeds on the ocean floor.</p>
                <p className={Styles.reading_txt}>Habitats can also be put into categories based on climate type. For example, polar bears and emperor penguins live in very cold polar habitats, while gorillas and orangutans live in much warmer tropical habitats. Even though gorillas inhabit mountain forests in equatorial Africa and orangutans live in the rainforests of equatorial southeast Asia, both can be said to live in tropical habitats. Habitats can also be put into categories based on vegetation type. For example, we can also say orangutans live in rainforest habitats, while lions live in grassland habitats.</p>
                <p className={Styles.reading_txt}>No matter what kind of habitat we're talking about, we can be sure it contains many species that each form part of a complex ecosystem. An ecosystem in a terrestrial habitat usually involves a wide range of species including plants, animals, birds, insects and microorganisms in the soil. These organisms are linked in a variety of ways. Animals might eat other animals, or they might depend on plants for food. And the plants might depend on nutrients in the soil from the waste of these animals. Microorganisms might depend on dead bodies for food, and insects might play an essential role in the pollination of certain plants. If the insects disappear, the plants will eventually disappear as well if they can't produce seeds. And birds that depend on these plants for food as well as nest-building materials might also disappear, and so on.</p>
                <p className={Styles.reading_txt}>All of these connections among organisms in a habitat form an ecosystem, and while some organisms might survive changes to their ecosystem, many may not. The most vulnerable might even become endangered if important habitats are damaged or lost.</p>

                <h2 id="title-3">Word Checker</h2>
                <Quote>
                    <p>breeding (noun): the process by which organisms reproduce</p>
                    <p>coral reef (noun): a marine habitat around rock-like calcium formations created by colonies of living coral</p>
                    <p>marsh (noun): an area of soft, wet land that often floods during high tides or the rainy season</p>
                    <p>orangutan (noun): a large ape with long red hair and long arms that inhabits the jungles of Borneo and Sumatra</p>
                    <p>terrestrial (adjective): on or related to the Earth's land (as opposed to the sea or the sky) </p>
                </Quote>

            </div>
        ),
        questions: [
            {
                question: "1. A habitat is the _______ in which something lives.",
                choices: [
                    { isAnswer: false, label: "way" },
                    { isAnswer: false, label: "time" },
                    { isAnswer: true, label: "place" },
                ]
            },
            {
                question: "2. Which is most likely to be an apex predator?",
                choices: [
                    { isAnswer: false, label: "a tuna fish" },
                    { isAnswer: false, label: "a piranha fish" },
                    { isAnswer: true, label: "a killer whale" },
                ]
            },
            {
                question: "3. What type of habitat is a river?",
                choices: [
                    { isAnswer: false, label: "terrestrial" },
                    { isAnswer: true, label: "freshwater" },
                    { isAnswer: false, label: "marine" },
                ]
            },
            {
                question: "4. Which lives in a polar habitat?",
                choices: [
                    { isAnswer: false, label: "the polecat" },
                    { isAnswer: false, label: "the snow leopard" },
                    { isAnswer: true, label: "the emperor penguin" },
                ]
            },
            {
                question: "5. If many of its habitats are lost, a species can become",
                choices: [
                    { isAnswer: false, label: "invisible" },
                    { isAnswer: true, label: "endangered" },
                    { isAnswer: false, label: "dangerous" },
                ]
            },
        ],
        previous: "reading-exercises-II",
    },
    {
        id: "verb-classification",
        level: "Beginner",
        type: "Verb",
        title: "Verb Classification",
        image: randomBackground(),
        estimateTime: "15-20",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">Reading Exercises II</h1>
                <p>Please read the following text and try to answer the questions.</p>

                <h2 id="title-2">Natural Habitats</h2>
                <p className={Styles.reading_txt}>Every living thing has a particular place in which it lives, and we call this place its habitat. A good habitat provides everything an organism needs to survive. It provides food and shelter, places for breeding or laying eggs, the right kind of climate, and so on. Every particular type of organism, or species, needs a particular type of natural habitat. For some species it could be deep in a forest, while for others it could be deep in the ocean. No matter what type of habitat a species needs, it will have to share it with other species who have adapted to the same kind of natural environment.</p>
                <p className={Styles.reading_txt}>When many species share a particular habitat, some species will be food for other species, which in turn might be food for others even higher up the food chain. Food chains are just one of many relationship networks within a habitat that together form what we call an ecosystem. As such, every species becomes part of an ecosystem within its particular habitat. Lions, for example, live in habitats across the grasslands of central Africa. They are apex predators, which means they are at the top of the food chain in their ecosystem. The food chains that lions are part of include various grasses and other plants eaten by the animals that lions eat, such as zebras, buffaloes and giraffes.</p>
                <p className={Styles.reading_txt}>Habitats are often divided into three main types: terrestrial, freshwater and marine. Terrestrial habitats are places on land like forests, woodlands, grasslands and deserts, while freshwater habitats include rivers, lakes, ponds and inland swamps and marshes. Marine habitats include all those places that are part of the world's oceans such as coastal rock pools, coral reefs, open seas far from land, and seabeds on the ocean floor.</p>
                <p className={Styles.reading_txt}>Habitats can also be put into categories based on climate type. For example, polar bears and emperor penguins live in very cold polar habitats, while gorillas and orangutans live in much warmer tropical habitats. Even though gorillas inhabit mountain forests in equatorial Africa and orangutans live in the rainforests of equatorial southeast Asia, both can be said to live in tropical habitats. Habitats can also be put into categories based on vegetation type. For example, we can also say orangutans live in rainforest habitats, while lions live in grassland habitats.</p>
                <p className={Styles.reading_txt}>No matter what kind of habitat we're talking about, we can be sure it contains many species that each form part of a complex ecosystem. An ecosystem in a terrestrial habitat usually involves a wide range of species including plants, animals, birds, insects and microorganisms in the soil. These organisms are linked in a variety of ways. Animals might eat other animals, or they might depend on plants for food. And the plants might depend on nutrients in the soil from the waste of these animals. Microorganisms might depend on dead bodies for food, and insects might play an essential role in the pollination of certain plants. If the insects disappear, the plants will eventually disappear as well if they can't produce seeds. And birds that depend on these plants for food as well as nest-building materials might also disappear, and so on.</p>
                <p className={Styles.reading_txt}>All of these connections among organisms in a habitat form an ecosystem, and while some organisms might survive changes to their ecosystem, many may not. The most vulnerable might even become endangered if important habitats are damaged or lost.</p>

                <h2 id="title-3">Word Checker</h2>
                <Quote>
                    <p>breeding (noun): the process by which organisms reproduce</p>
                    <p>coral reef (noun): a marine habitat around rock-like calcium formations created by colonies of living coral</p>
                    <p>marsh (noun): an area of soft, wet land that often floods during high tides or the rainy season</p>
                    <p>orangutan (noun): a large ape with long red hair and long arms that inhabits the jungles of Borneo and Sumatra</p>
                    <p>terrestrial (adjective): on or related to the Earth's land (as opposed to the sea or the sky) </p>
                </Quote>

            </div>
        ),
        questions: [
            {
                question: "1. A habitat is the _______ in which something lives.",
                choices: [
                    { isAnswer: false, label: "way" },
                    { isAnswer: false, label: "time" },
                    { isAnswer: true, label: "place" },
                ]
            },
            {
                question: "2. Which is most likely to be an apex predator?",
                choices: [
                    { isAnswer: false, label: "a tuna fish" },
                    { isAnswer: false, label: "a piranha fish" },
                    { isAnswer: true, label: "a killer whale" },
                ]
            },
            {
                question: "3. What type of habitat is a river?",
                choices: [
                    { isAnswer: false, label: "terrestrial" },
                    { isAnswer: true, label: "freshwater" },
                    { isAnswer: false, label: "marine" },
                ]
            },
            {
                question: "4. Which lives in a polar habitat?",
                choices: [
                    { isAnswer: false, label: "the polecat" },
                    { isAnswer: false, label: "the snow leopard" },
                    { isAnswer: true, label: "the emperor penguin" },
                ]
            },
            {
                question: "5. If many of its habitats are lost, a species can become",
                choices: [
                    { isAnswer: false, label: "invisible" },
                    { isAnswer: true, label: "endangered" },
                    { isAnswer: false, label: "dangerous" },
                ]
            },
        ],
        previous: "reading-exercises-II",
    },
    {
        id: "verb-forms",
        level: "Beginner",
        type: "Verb",
        title: "Verb Forms",
        image: randomBackground(),
        estimateTime: "10",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">Reading Exercises II</h1>
                <p>Please read the following text and try to answer the questions.</p>

                <h2 id="title-2">Natural Habitats</h2>
                <p className={Styles.reading_txt}>Every living thing has a particular place in which it lives, and we call this place its habitat. A good habitat provides everything an organism needs to survive. It provides food and shelter, places for breeding or laying eggs, the right kind of climate, and so on. Every particular type of organism, or species, needs a particular type of natural habitat. For some species it could be deep in a forest, while for others it could be deep in the ocean. No matter what type of habitat a species needs, it will have to share it with other species who have adapted to the same kind of natural environment.</p>
                <p className={Styles.reading_txt}>When many species share a particular habitat, some species will be food for other species, which in turn might be food for others even higher up the food chain. Food chains are just one of many relationship networks within a habitat that together form what we call an ecosystem. As such, every species becomes part of an ecosystem within its particular habitat. Lions, for example, live in habitats across the grasslands of central Africa. They are apex predators, which means they are at the top of the food chain in their ecosystem. The food chains that lions are part of include various grasses and other plants eaten by the animals that lions eat, such as zebras, buffaloes and giraffes.</p>
                <p className={Styles.reading_txt}>Habitats are often divided into three main types: terrestrial, freshwater and marine. Terrestrial habitats are places on land like forests, woodlands, grasslands and deserts, while freshwater habitats include rivers, lakes, ponds and inland swamps and marshes. Marine habitats include all those places that are part of the world's oceans such as coastal rock pools, coral reefs, open seas far from land, and seabeds on the ocean floor.</p>
                <p className={Styles.reading_txt}>Habitats can also be put into categories based on climate type. For example, polar bears and emperor penguins live in very cold polar habitats, while gorillas and orangutans live in much warmer tropical habitats. Even though gorillas inhabit mountain forests in equatorial Africa and orangutans live in the rainforests of equatorial southeast Asia, both can be said to live in tropical habitats. Habitats can also be put into categories based on vegetation type. For example, we can also say orangutans live in rainforest habitats, while lions live in grassland habitats.</p>
                <p className={Styles.reading_txt}>No matter what kind of habitat we're talking about, we can be sure it contains many species that each form part of a complex ecosystem. An ecosystem in a terrestrial habitat usually involves a wide range of species including plants, animals, birds, insects and microorganisms in the soil. These organisms are linked in a variety of ways. Animals might eat other animals, or they might depend on plants for food. And the plants might depend on nutrients in the soil from the waste of these animals. Microorganisms might depend on dead bodies for food, and insects might play an essential role in the pollination of certain plants. If the insects disappear, the plants will eventually disappear as well if they can't produce seeds. And birds that depend on these plants for food as well as nest-building materials might also disappear, and so on.</p>
                <p className={Styles.reading_txt}>All of these connections among organisms in a habitat form an ecosystem, and while some organisms might survive changes to their ecosystem, many may not. The most vulnerable might even become endangered if important habitats are damaged or lost.</p>

                <h2 id="title-3">Word Checker</h2>
                <Quote>
                    <p>breeding (noun): the process by which organisms reproduce</p>
                    <p>coral reef (noun): a marine habitat around rock-like calcium formations created by colonies of living coral</p>
                    <p>marsh (noun): an area of soft, wet land that often floods during high tides or the rainy season</p>
                    <p>orangutan (noun): a large ape with long red hair and long arms that inhabits the jungles of Borneo and Sumatra</p>
                    <p>terrestrial (adjective): on or related to the Earth's land (as opposed to the sea or the sky) </p>
                </Quote>

            </div>
        ),
        questions: [
            {
                question: "1. A habitat is the _______ in which something lives.",
                choices: [
                    { isAnswer: false, label: "way" },
                    { isAnswer: false, label: "time" },
                    { isAnswer: true, label: "place" },
                ]
            },
            {
                question: "2. Which is most likely to be an apex predator?",
                choices: [
                    { isAnswer: false, label: "a tuna fish" },
                    { isAnswer: false, label: "a piranha fish" },
                    { isAnswer: true, label: "a killer whale" },
                ]
            },
            {
                question: "3. What type of habitat is a river?",
                choices: [
                    { isAnswer: false, label: "terrestrial" },
                    { isAnswer: true, label: "freshwater" },
                    { isAnswer: false, label: "marine" },
                ]
            },
            {
                question: "4. Which lives in a polar habitat?",
                choices: [
                    { isAnswer: false, label: "the polecat" },
                    { isAnswer: false, label: "the snow leopard" },
                    { isAnswer: true, label: "the emperor penguin" },
                ]
            },
            {
                question: "5. If many of its habitats are lost, a species can become",
                choices: [
                    { isAnswer: false, label: "invisible" },
                    { isAnswer: true, label: "endangered" },
                    { isAnswer: false, label: "dangerous" },
                ]
            },
        ],
        previous: "reading-exercises-II",
    },
    {
        id: "what-is-tense",
        level: "Beginner",
        type: "Grammar",
        title: "What is Tense?",
        image: randomBackground(),
        estimateTime: "10",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">Reading Exercises II</h1>
                <p>Please read the following text and try to answer the questions.</p>

                <h2 id="title-2">Natural Habitats</h2>
                <p className={Styles.reading_txt}>Every living thing has a particular place in which it lives, and we call this place its habitat. A good habitat provides everything an organism needs to survive. It provides food and shelter, places for breeding or laying eggs, the right kind of climate, and so on. Every particular type of organism, or species, needs a particular type of natural habitat. For some species it could be deep in a forest, while for others it could be deep in the ocean. No matter what type of habitat a species needs, it will have to share it with other species who have adapted to the same kind of natural environment.</p>
                <p className={Styles.reading_txt}>When many species share a particular habitat, some species will be food for other species, which in turn might be food for others even higher up the food chain. Food chains are just one of many relationship networks within a habitat that together form what we call an ecosystem. As such, every species becomes part of an ecosystem within its particular habitat. Lions, for example, live in habitats across the grasslands of central Africa. They are apex predators, which means they are at the top of the food chain in their ecosystem. The food chains that lions are part of include various grasses and other plants eaten by the animals that lions eat, such as zebras, buffaloes and giraffes.</p>
                <p className={Styles.reading_txt}>Habitats are often divided into three main types: terrestrial, freshwater and marine. Terrestrial habitats are places on land like forests, woodlands, grasslands and deserts, while freshwater habitats include rivers, lakes, ponds and inland swamps and marshes. Marine habitats include all those places that are part of the world's oceans such as coastal rock pools, coral reefs, open seas far from land, and seabeds on the ocean floor.</p>
                <p className={Styles.reading_txt}>Habitats can also be put into categories based on climate type. For example, polar bears and emperor penguins live in very cold polar habitats, while gorillas and orangutans live in much warmer tropical habitats. Even though gorillas inhabit mountain forests in equatorial Africa and orangutans live in the rainforests of equatorial southeast Asia, both can be said to live in tropical habitats. Habitats can also be put into categories based on vegetation type. For example, we can also say orangutans live in rainforest habitats, while lions live in grassland habitats.</p>
                <p className={Styles.reading_txt}>No matter what kind of habitat we're talking about, we can be sure it contains many species that each form part of a complex ecosystem. An ecosystem in a terrestrial habitat usually involves a wide range of species including plants, animals, birds, insects and microorganisms in the soil. These organisms are linked in a variety of ways. Animals might eat other animals, or they might depend on plants for food. And the plants might depend on nutrients in the soil from the waste of these animals. Microorganisms might depend on dead bodies for food, and insects might play an essential role in the pollination of certain plants. If the insects disappear, the plants will eventually disappear as well if they can't produce seeds. And birds that depend on these plants for food as well as nest-building materials might also disappear, and so on.</p>
                <p className={Styles.reading_txt}>All of these connections among organisms in a habitat form an ecosystem, and while some organisms might survive changes to their ecosystem, many may not. The most vulnerable might even become endangered if important habitats are damaged or lost.</p>

                <h2 id="title-3">Word Checker</h2>
                <Quote>
                    <p>breeding (noun): the process by which organisms reproduce</p>
                    <p>coral reef (noun): a marine habitat around rock-like calcium formations created by colonies of living coral</p>
                    <p>marsh (noun): an area of soft, wet land that often floods during high tides or the rainy season</p>
                    <p>orangutan (noun): a large ape with long red hair and long arms that inhabits the jungles of Borneo and Sumatra</p>
                    <p>terrestrial (adjective): on or related to the Earth's land (as opposed to the sea or the sky) </p>
                </Quote>

            </div>
        ),
        questions: [
            {
                question: "1. A habitat is the _______ in which something lives.",
                choices: [
                    { isAnswer: false, label: "way" },
                    { isAnswer: false, label: "time" },
                    { isAnswer: true, label: "place" },
                ]
            },
            {
                question: "2. Which is most likely to be an apex predator?",
                choices: [
                    { isAnswer: false, label: "a tuna fish" },
                    { isAnswer: false, label: "a piranha fish" },
                    { isAnswer: true, label: "a killer whale" },
                ]
            },
            {
                question: "3. What type of habitat is a river?",
                choices: [
                    { isAnswer: false, label: "terrestrial" },
                    { isAnswer: true, label: "freshwater" },
                    { isAnswer: false, label: "marine" },
                ]
            },
            {
                question: "4. Which lives in a polar habitat?",
                choices: [
                    { isAnswer: false, label: "the polecat" },
                    { isAnswer: false, label: "the snow leopard" },
                    { isAnswer: true, label: "the emperor penguin" },
                ]
            },
            {
                question: "5. If many of its habitats are lost, a species can become",
                choices: [
                    { isAnswer: false, label: "invisible" },
                    { isAnswer: true, label: "endangered" },
                    { isAnswer: false, label: "dangerous" },
                ]
            },
        ],
        previous: "reading-exercises-II",
    },
    {
        id: "english-tense-system",
        level: "Beginner",
        type: "Grammar",
        title: "English Tense System",
        image: randomBackground(),
        estimateTime: "10",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">Reading Exercises II</h1>
                <p>Please read the following text and try to answer the questions.</p>

                <h2 id="title-2">Natural Habitats</h2>
                <p className={Styles.reading_txt}>Every living thing has a particular place in which it lives, and we call this place its habitat. A good habitat provides everything an organism needs to survive. It provides food and shelter, places for breeding or laying eggs, the right kind of climate, and so on. Every particular type of organism, or species, needs a particular type of natural habitat. For some species it could be deep in a forest, while for others it could be deep in the ocean. No matter what type of habitat a species needs, it will have to share it with other species who have adapted to the same kind of natural environment.</p>
                <p className={Styles.reading_txt}>When many species share a particular habitat, some species will be food for other species, which in turn might be food for others even higher up the food chain. Food chains are just one of many relationship networks within a habitat that together form what we call an ecosystem. As such, every species becomes part of an ecosystem within its particular habitat. Lions, for example, live in habitats across the grasslands of central Africa. They are apex predators, which means they are at the top of the food chain in their ecosystem. The food chains that lions are part of include various grasses and other plants eaten by the animals that lions eat, such as zebras, buffaloes and giraffes.</p>
                <p className={Styles.reading_txt}>Habitats are often divided into three main types: terrestrial, freshwater and marine. Terrestrial habitats are places on land like forests, woodlands, grasslands and deserts, while freshwater habitats include rivers, lakes, ponds and inland swamps and marshes. Marine habitats include all those places that are part of the world's oceans such as coastal rock pools, coral reefs, open seas far from land, and seabeds on the ocean floor.</p>
                <p className={Styles.reading_txt}>Habitats can also be put into categories based on climate type. For example, polar bears and emperor penguins live in very cold polar habitats, while gorillas and orangutans live in much warmer tropical habitats. Even though gorillas inhabit mountain forests in equatorial Africa and orangutans live in the rainforests of equatorial southeast Asia, both can be said to live in tropical habitats. Habitats can also be put into categories based on vegetation type. For example, we can also say orangutans live in rainforest habitats, while lions live in grassland habitats.</p>
                <p className={Styles.reading_txt}>No matter what kind of habitat we're talking about, we can be sure it contains many species that each form part of a complex ecosystem. An ecosystem in a terrestrial habitat usually involves a wide range of species including plants, animals, birds, insects and microorganisms in the soil. These organisms are linked in a variety of ways. Animals might eat other animals, or they might depend on plants for food. And the plants might depend on nutrients in the soil from the waste of these animals. Microorganisms might depend on dead bodies for food, and insects might play an essential role in the pollination of certain plants. If the insects disappear, the plants will eventually disappear as well if they can't produce seeds. And birds that depend on these plants for food as well as nest-building materials might also disappear, and so on.</p>
                <p className={Styles.reading_txt}>All of these connections among organisms in a habitat form an ecosystem, and while some organisms might survive changes to their ecosystem, many may not. The most vulnerable might even become endangered if important habitats are damaged or lost.</p>

                <h2 id="title-3">Word Checker</h2>
                <Quote>
                    <p>breeding (noun): the process by which organisms reproduce</p>
                    <p>coral reef (noun): a marine habitat around rock-like calcium formations created by colonies of living coral</p>
                    <p>marsh (noun): an area of soft, wet land that often floods during high tides or the rainy season</p>
                    <p>orangutan (noun): a large ape with long red hair and long arms that inhabits the jungles of Borneo and Sumatra</p>
                    <p>terrestrial (adjective): on or related to the Earth's land (as opposed to the sea or the sky) </p>
                </Quote>

            </div>
        ),
        questions: [
            {
                question: "1. A habitat is the _______ in which something lives.",
                choices: [
                    { isAnswer: false, label: "way" },
                    { isAnswer: false, label: "time" },
                    { isAnswer: true, label: "place" },
                ]
            },
            {
                question: "2. Which is most likely to be an apex predator?",
                choices: [
                    { isAnswer: false, label: "a tuna fish" },
                    { isAnswer: false, label: "a piranha fish" },
                    { isAnswer: true, label: "a killer whale" },
                ]
            },
            {
                question: "3. What type of habitat is a river?",
                choices: [
                    { isAnswer: false, label: "terrestrial" },
                    { isAnswer: true, label: "freshwater" },
                    { isAnswer: false, label: "marine" },
                ]
            },
            {
                question: "4. Which lives in a polar habitat?",
                choices: [
                    { isAnswer: false, label: "the polecat" },
                    { isAnswer: false, label: "the snow leopard" },
                    { isAnswer: true, label: "the emperor penguin" },
                ]
            },
            {
                question: "5. If many of its habitats are lost, a species can become",
                choices: [
                    { isAnswer: false, label: "invisible" },
                    { isAnswer: true, label: "endangered" },
                    { isAnswer: false, label: "dangerous" },
                ]
            },
        ],
        previous: "reading-exercises-II",
    },
    {
        id: "present-simple",
        level: "Beginner",
        type: "Grammar",
        title: "Present Simple",
        image: randomBackground(),
        estimateTime: "10",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">Reading Exercises II</h1>
                <p>Please read the following text and try to answer the questions.</p>

                <h2 id="title-2">Natural Habitats</h2>
                <p className={Styles.reading_txt}>Every living thing has a particular place in which it lives, and we call this place its habitat. A good habitat provides everything an organism needs to survive. It provides food and shelter, places for breeding or laying eggs, the right kind of climate, and so on. Every particular type of organism, or species, needs a particular type of natural habitat. For some species it could be deep in a forest, while for others it could be deep in the ocean. No matter what type of habitat a species needs, it will have to share it with other species who have adapted to the same kind of natural environment.</p>
                <p className={Styles.reading_txt}>When many species share a particular habitat, some species will be food for other species, which in turn might be food for others even higher up the food chain. Food chains are just one of many relationship networks within a habitat that together form what we call an ecosystem. As such, every species becomes part of an ecosystem within its particular habitat. Lions, for example, live in habitats across the grasslands of central Africa. They are apex predators, which means they are at the top of the food chain in their ecosystem. The food chains that lions are part of include various grasses and other plants eaten by the animals that lions eat, such as zebras, buffaloes and giraffes.</p>
                <p className={Styles.reading_txt}>Habitats are often divided into three main types: terrestrial, freshwater and marine. Terrestrial habitats are places on land like forests, woodlands, grasslands and deserts, while freshwater habitats include rivers, lakes, ponds and inland swamps and marshes. Marine habitats include all those places that are part of the world's oceans such as coastal rock pools, coral reefs, open seas far from land, and seabeds on the ocean floor.</p>
                <p className={Styles.reading_txt}>Habitats can also be put into categories based on climate type. For example, polar bears and emperor penguins live in very cold polar habitats, while gorillas and orangutans live in much warmer tropical habitats. Even though gorillas inhabit mountain forests in equatorial Africa and orangutans live in the rainforests of equatorial southeast Asia, both can be said to live in tropical habitats. Habitats can also be put into categories based on vegetation type. For example, we can also say orangutans live in rainforest habitats, while lions live in grassland habitats.</p>
                <p className={Styles.reading_txt}>No matter what kind of habitat we're talking about, we can be sure it contains many species that each form part of a complex ecosystem. An ecosystem in a terrestrial habitat usually involves a wide range of species including plants, animals, birds, insects and microorganisms in the soil. These organisms are linked in a variety of ways. Animals might eat other animals, or they might depend on plants for food. And the plants might depend on nutrients in the soil from the waste of these animals. Microorganisms might depend on dead bodies for food, and insects might play an essential role in the pollination of certain plants. If the insects disappear, the plants will eventually disappear as well if they can't produce seeds. And birds that depend on these plants for food as well as nest-building materials might also disappear, and so on.</p>
                <p className={Styles.reading_txt}>All of these connections among organisms in a habitat form an ecosystem, and while some organisms might survive changes to their ecosystem, many may not. The most vulnerable might even become endangered if important habitats are damaged or lost.</p>

                <h2 id="title-3">Word Checker</h2>
                <Quote>
                    <p>breeding (noun): the process by which organisms reproduce</p>
                    <p>coral reef (noun): a marine habitat around rock-like calcium formations created by colonies of living coral</p>
                    <p>marsh (noun): an area of soft, wet land that often floods during high tides or the rainy season</p>
                    <p>orangutan (noun): a large ape with long red hair and long arms that inhabits the jungles of Borneo and Sumatra</p>
                    <p>terrestrial (adjective): on or related to the Earth's land (as opposed to the sea or the sky) </p>
                </Quote>

            </div>
        ),
        questions: [
            {
                question: "1. A habitat is the _______ in which something lives.",
                choices: [
                    { isAnswer: false, label: "way" },
                    { isAnswer: false, label: "time" },
                    { isAnswer: true, label: "place" },
                ]
            },
            {
                question: "2. Which is most likely to be an apex predator?",
                choices: [
                    { isAnswer: false, label: "a tuna fish" },
                    { isAnswer: false, label: "a piranha fish" },
                    { isAnswer: true, label: "a killer whale" },
                ]
            },
            {
                question: "3. What type of habitat is a river?",
                choices: [
                    { isAnswer: false, label: "terrestrial" },
                    { isAnswer: true, label: "freshwater" },
                    { isAnswer: false, label: "marine" },
                ]
            },
            {
                question: "4. Which lives in a polar habitat?",
                choices: [
                    { isAnswer: false, label: "the polecat" },
                    { isAnswer: false, label: "the snow leopard" },
                    { isAnswer: true, label: "the emperor penguin" },
                ]
            },
            {
                question: "5. If many of its habitats are lost, a species can become",
                choices: [
                    { isAnswer: false, label: "invisible" },
                    { isAnswer: true, label: "endangered" },
                    { isAnswer: false, label: "dangerous" },
                ]
            },
        ],
        previous: "reading-exercises-II",
    },
    {
        id: "present-continuous",
        level: "Beginner",
        type: "Grammar",
        title: "Present Continuous",
        image: randomBackground(),
        estimateTime: "10",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">Reading Exercises II</h1>
                <p>Please read the following text and try to answer the questions.</p>

                <h2 id="title-2">Natural Habitats</h2>
                <p className={Styles.reading_txt}>Every living thing has a particular place in which it lives, and we call this place its habitat. A good habitat provides everything an organism needs to survive. It provides food and shelter, places for breeding or laying eggs, the right kind of climate, and so on. Every particular type of organism, or species, needs a particular type of natural habitat. For some species it could be deep in a forest, while for others it could be deep in the ocean. No matter what type of habitat a species needs, it will have to share it with other species who have adapted to the same kind of natural environment.</p>
                <p className={Styles.reading_txt}>When many species share a particular habitat, some species will be food for other species, which in turn might be food for others even higher up the food chain. Food chains are just one of many relationship networks within a habitat that together form what we call an ecosystem. As such, every species becomes part of an ecosystem within its particular habitat. Lions, for example, live in habitats across the grasslands of central Africa. They are apex predators, which means they are at the top of the food chain in their ecosystem. The food chains that lions are part of include various grasses and other plants eaten by the animals that lions eat, such as zebras, buffaloes and giraffes.</p>
                <p className={Styles.reading_txt}>Habitats are often divided into three main types: terrestrial, freshwater and marine. Terrestrial habitats are places on land like forests, woodlands, grasslands and deserts, while freshwater habitats include rivers, lakes, ponds and inland swamps and marshes. Marine habitats include all those places that are part of the world's oceans such as coastal rock pools, coral reefs, open seas far from land, and seabeds on the ocean floor.</p>
                <p className={Styles.reading_txt}>Habitats can also be put into categories based on climate type. For example, polar bears and emperor penguins live in very cold polar habitats, while gorillas and orangutans live in much warmer tropical habitats. Even though gorillas inhabit mountain forests in equatorial Africa and orangutans live in the rainforests of equatorial southeast Asia, both can be said to live in tropical habitats. Habitats can also be put into categories based on vegetation type. For example, we can also say orangutans live in rainforest habitats, while lions live in grassland habitats.</p>
                <p className={Styles.reading_txt}>No matter what kind of habitat we're talking about, we can be sure it contains many species that each form part of a complex ecosystem. An ecosystem in a terrestrial habitat usually involves a wide range of species including plants, animals, birds, insects and microorganisms in the soil. These organisms are linked in a variety of ways. Animals might eat other animals, or they might depend on plants for food. And the plants might depend on nutrients in the soil from the waste of these animals. Microorganisms might depend on dead bodies for food, and insects might play an essential role in the pollination of certain plants. If the insects disappear, the plants will eventually disappear as well if they can't produce seeds. And birds that depend on these plants for food as well as nest-building materials might also disappear, and so on.</p>
                <p className={Styles.reading_txt}>All of these connections among organisms in a habitat form an ecosystem, and while some organisms might survive changes to their ecosystem, many may not. The most vulnerable might even become endangered if important habitats are damaged or lost.</p>

                <h2 id="title-3">Word Checker</h2>
                <Quote>
                    <p>breeding (noun): the process by which organisms reproduce</p>
                    <p>coral reef (noun): a marine habitat around rock-like calcium formations created by colonies of living coral</p>
                    <p>marsh (noun): an area of soft, wet land that often floods during high tides or the rainy season</p>
                    <p>orangutan (noun): a large ape with long red hair and long arms that inhabits the jungles of Borneo and Sumatra</p>
                    <p>terrestrial (adjective): on or related to the Earth's land (as opposed to the sea or the sky) </p>
                </Quote>

            </div>
        ),
        questions: [
            {
                question: "1. A habitat is the _______ in which something lives.",
                choices: [
                    { isAnswer: false, label: "way" },
                    { isAnswer: false, label: "time" },
                    { isAnswer: true, label: "place" },
                ]
            },
            {
                question: "2. Which is most likely to be an apex predator?",
                choices: [
                    { isAnswer: false, label: "a tuna fish" },
                    { isAnswer: false, label: "a piranha fish" },
                    { isAnswer: true, label: "a killer whale" },
                ]
            },
            {
                question: "3. What type of habitat is a river?",
                choices: [
                    { isAnswer: false, label: "terrestrial" },
                    { isAnswer: true, label: "freshwater" },
                    { isAnswer: false, label: "marine" },
                ]
            },
            {
                question: "4. Which lives in a polar habitat?",
                choices: [
                    { isAnswer: false, label: "the polecat" },
                    { isAnswer: false, label: "the snow leopard" },
                    { isAnswer: true, label: "the emperor penguin" },
                ]
            },
            {
                question: "5. If many of its habitats are lost, a species can become",
                choices: [
                    { isAnswer: false, label: "invisible" },
                    { isAnswer: true, label: "endangered" },
                    { isAnswer: false, label: "dangerous" },
                ]
            },
        ],
        previous: "reading-exercises-II",
    },
    {
        id: "present-perfect-tense",
        level: "Intermediate",
        type: "Grammar",
        title: "Present Perfect Tense",
        image: randomBackground(),
        estimateTime: "10",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">Reading Exercises II</h1>
                <p>Please read the following text and try to answer the questions.</p>

                <h2 id="title-2">Natural Habitats</h2>
                <p className={Styles.reading_txt}>Every living thing has a particular place in which it lives, and we call this place its habitat. A good habitat provides everything an organism needs to survive. It provides food and shelter, places for breeding or laying eggs, the right kind of climate, and so on. Every particular type of organism, or species, needs a particular type of natural habitat. For some species it could be deep in a forest, while for others it could be deep in the ocean. No matter what type of habitat a species needs, it will have to share it with other species who have adapted to the same kind of natural environment.</p>
                <p className={Styles.reading_txt}>When many species share a particular habitat, some species will be food for other species, which in turn might be food for others even higher up the food chain. Food chains are just one of many relationship networks within a habitat that together form what we call an ecosystem. As such, every species becomes part of an ecosystem within its particular habitat. Lions, for example, live in habitats across the grasslands of central Africa. They are apex predators, which means they are at the top of the food chain in their ecosystem. The food chains that lions are part of include various grasses and other plants eaten by the animals that lions eat, such as zebras, buffaloes and giraffes.</p>
                <p className={Styles.reading_txt}>Habitats are often divided into three main types: terrestrial, freshwater and marine. Terrestrial habitats are places on land like forests, woodlands, grasslands and deserts, while freshwater habitats include rivers, lakes, ponds and inland swamps and marshes. Marine habitats include all those places that are part of the world's oceans such as coastal rock pools, coral reefs, open seas far from land, and seabeds on the ocean floor.</p>
                <p className={Styles.reading_txt}>Habitats can also be put into categories based on climate type. For example, polar bears and emperor penguins live in very cold polar habitats, while gorillas and orangutans live in much warmer tropical habitats. Even though gorillas inhabit mountain forests in equatorial Africa and orangutans live in the rainforests of equatorial southeast Asia, both can be said to live in tropical habitats. Habitats can also be put into categories based on vegetation type. For example, we can also say orangutans live in rainforest habitats, while lions live in grassland habitats.</p>
                <p className={Styles.reading_txt}>No matter what kind of habitat we're talking about, we can be sure it contains many species that each form part of a complex ecosystem. An ecosystem in a terrestrial habitat usually involves a wide range of species including plants, animals, birds, insects and microorganisms in the soil. These organisms are linked in a variety of ways. Animals might eat other animals, or they might depend on plants for food. And the plants might depend on nutrients in the soil from the waste of these animals. Microorganisms might depend on dead bodies for food, and insects might play an essential role in the pollination of certain plants. If the insects disappear, the plants will eventually disappear as well if they can't produce seeds. And birds that depend on these plants for food as well as nest-building materials might also disappear, and so on.</p>
                <p className={Styles.reading_txt}>All of these connections among organisms in a habitat form an ecosystem, and while some organisms might survive changes to their ecosystem, many may not. The most vulnerable might even become endangered if important habitats are damaged or lost.</p>

                <h2 id="title-3">Word Checker</h2>
                <Quote>
                    <p>breeding (noun): the process by which organisms reproduce</p>
                    <p>coral reef (noun): a marine habitat around rock-like calcium formations created by colonies of living coral</p>
                    <p>marsh (noun): an area of soft, wet land that often floods during high tides or the rainy season</p>
                    <p>orangutan (noun): a large ape with long red hair and long arms that inhabits the jungles of Borneo and Sumatra</p>
                    <p>terrestrial (adjective): on or related to the Earth's land (as opposed to the sea or the sky) </p>
                </Quote>

            </div>
        ),
        questions: [
            {
                question: "1. A habitat is the _______ in which something lives.",
                choices: [
                    { isAnswer: false, label: "way" },
                    { isAnswer: false, label: "time" },
                    { isAnswer: true, label: "place" },
                ]
            },
            {
                question: "2. Which is most likely to be an apex predator?",
                choices: [
                    { isAnswer: false, label: "a tuna fish" },
                    { isAnswer: false, label: "a piranha fish" },
                    { isAnswer: true, label: "a killer whale" },
                ]
            },
            {
                question: "3. What type of habitat is a river?",
                choices: [
                    { isAnswer: false, label: "terrestrial" },
                    { isAnswer: true, label: "freshwater" },
                    { isAnswer: false, label: "marine" },
                ]
            },
            {
                question: "4. Which lives in a polar habitat?",
                choices: [
                    { isAnswer: false, label: "the polecat" },
                    { isAnswer: false, label: "the snow leopard" },
                    { isAnswer: true, label: "the emperor penguin" },
                ]
            },
            {
                question: "5. If many of its habitats are lost, a species can become",
                choices: [
                    { isAnswer: false, label: "invisible" },
                    { isAnswer: true, label: "endangered" },
                    { isAnswer: false, label: "dangerous" },
                ]
            },
        ],
        previous: "reading-exercises-II",
    },
    {
        id: "present-perfect-continuous",
        level: "Intermediate",
        type: "Grammar",
        title: "Present Perfect Continuous",
        image: randomBackground(),
        estimateTime: "10",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">Reading Exercises II</h1>
                <p>Please read the following text and try to answer the questions.</p>

                <h2 id="title-2">Natural Habitats</h2>
                <p className={Styles.reading_txt}>Every living thing has a particular place in which it lives, and we call this place its habitat. A good habitat provides everything an organism needs to survive. It provides food and shelter, places for breeding or laying eggs, the right kind of climate, and so on. Every particular type of organism, or species, needs a particular type of natural habitat. For some species it could be deep in a forest, while for others it could be deep in the ocean. No matter what type of habitat a species needs, it will have to share it with other species who have adapted to the same kind of natural environment.</p>
                <p className={Styles.reading_txt}>When many species share a particular habitat, some species will be food for other species, which in turn might be food for others even higher up the food chain. Food chains are just one of many relationship networks within a habitat that together form what we call an ecosystem. As such, every species becomes part of an ecosystem within its particular habitat. Lions, for example, live in habitats across the grasslands of central Africa. They are apex predators, which means they are at the top of the food chain in their ecosystem. The food chains that lions are part of include various grasses and other plants eaten by the animals that lions eat, such as zebras, buffaloes and giraffes.</p>
                <p className={Styles.reading_txt}>Habitats are often divided into three main types: terrestrial, freshwater and marine. Terrestrial habitats are places on land like forests, woodlands, grasslands and deserts, while freshwater habitats include rivers, lakes, ponds and inland swamps and marshes. Marine habitats include all those places that are part of the world's oceans such as coastal rock pools, coral reefs, open seas far from land, and seabeds on the ocean floor.</p>
                <p className={Styles.reading_txt}>Habitats can also be put into categories based on climate type. For example, polar bears and emperor penguins live in very cold polar habitats, while gorillas and orangutans live in much warmer tropical habitats. Even though gorillas inhabit mountain forests in equatorial Africa and orangutans live in the rainforests of equatorial southeast Asia, both can be said to live in tropical habitats. Habitats can also be put into categories based on vegetation type. For example, we can also say orangutans live in rainforest habitats, while lions live in grassland habitats.</p>
                <p className={Styles.reading_txt}>No matter what kind of habitat we're talking about, we can be sure it contains many species that each form part of a complex ecosystem. An ecosystem in a terrestrial habitat usually involves a wide range of species including plants, animals, birds, insects and microorganisms in the soil. These organisms are linked in a variety of ways. Animals might eat other animals, or they might depend on plants for food. And the plants might depend on nutrients in the soil from the waste of these animals. Microorganisms might depend on dead bodies for food, and insects might play an essential role in the pollination of certain plants. If the insects disappear, the plants will eventually disappear as well if they can't produce seeds. And birds that depend on these plants for food as well as nest-building materials might also disappear, and so on.</p>
                <p className={Styles.reading_txt}>All of these connections among organisms in a habitat form an ecosystem, and while some organisms might survive changes to their ecosystem, many may not. The most vulnerable might even become endangered if important habitats are damaged or lost.</p>

                <h2 id="title-3">Word Checker</h2>
                <Quote>
                    <p>breeding (noun): the process by which organisms reproduce</p>
                    <p>coral reef (noun): a marine habitat around rock-like calcium formations created by colonies of living coral</p>
                    <p>marsh (noun): an area of soft, wet land that often floods during high tides or the rainy season</p>
                    <p>orangutan (noun): a large ape with long red hair and long arms that inhabits the jungles of Borneo and Sumatra</p>
                    <p>terrestrial (adjective): on or related to the Earth's land (as opposed to the sea or the sky) </p>
                </Quote>

            </div>
        ),
        questions: [
            {
                question: "1. A habitat is the _______ in which something lives.",
                choices: [
                    { isAnswer: false, label: "way" },
                    { isAnswer: false, label: "time" },
                    { isAnswer: true, label: "place" },
                ]
            },
            {
                question: "2. Which is most likely to be an apex predator?",
                choices: [
                    { isAnswer: false, label: "a tuna fish" },
                    { isAnswer: false, label: "a piranha fish" },
                    { isAnswer: true, label: "a killer whale" },
                ]
            },
            {
                question: "3. What type of habitat is a river?",
                choices: [
                    { isAnswer: false, label: "terrestrial" },
                    { isAnswer: true, label: "freshwater" },
                    { isAnswer: false, label: "marine" },
                ]
            },
            {
                question: "4. Which lives in a polar habitat?",
                choices: [
                    { isAnswer: false, label: "the polecat" },
                    { isAnswer: false, label: "the snow leopard" },
                    { isAnswer: true, label: "the emperor penguin" },
                ]
            },
            {
                question: "5. If many of its habitats are lost, a species can become",
                choices: [
                    { isAnswer: false, label: "invisible" },
                    { isAnswer: true, label: "endangered" },
                    { isAnswer: false, label: "dangerous" },
                ]
            },
        ],
        previous: "reading-exercises-II",
    },
    {
        id: "going-to",
        level: "Beginner",
        type: "Verb",
        title: "Going to",
        image: randomBackground(),
        estimateTime: "10",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">Reading Exercises II</h1>
                <p>Please read the following text and try to answer the questions.</p>

                <h2 id="title-2">Natural Habitats</h2>
                <p className={Styles.reading_txt}>Every living thing has a particular place in which it lives, and we call this place its habitat. A good habitat provides everything an organism needs to survive. It provides food and shelter, places for breeding or laying eggs, the right kind of climate, and so on. Every particular type of organism, or species, needs a particular type of natural habitat. For some species it could be deep in a forest, while for others it could be deep in the ocean. No matter what type of habitat a species needs, it will have to share it with other species who have adapted to the same kind of natural environment.</p>
                <p className={Styles.reading_txt}>When many species share a particular habitat, some species will be food for other species, which in turn might be food for others even higher up the food chain. Food chains are just one of many relationship networks within a habitat that together form what we call an ecosystem. As such, every species becomes part of an ecosystem within its particular habitat. Lions, for example, live in habitats across the grasslands of central Africa. They are apex predators, which means they are at the top of the food chain in their ecosystem. The food chains that lions are part of include various grasses and other plants eaten by the animals that lions eat, such as zebras, buffaloes and giraffes.</p>
                <p className={Styles.reading_txt}>Habitats are often divided into three main types: terrestrial, freshwater and marine. Terrestrial habitats are places on land like forests, woodlands, grasslands and deserts, while freshwater habitats include rivers, lakes, ponds and inland swamps and marshes. Marine habitats include all those places that are part of the world's oceans such as coastal rock pools, coral reefs, open seas far from land, and seabeds on the ocean floor.</p>
                <p className={Styles.reading_txt}>Habitats can also be put into categories based on climate type. For example, polar bears and emperor penguins live in very cold polar habitats, while gorillas and orangutans live in much warmer tropical habitats. Even though gorillas inhabit mountain forests in equatorial Africa and orangutans live in the rainforests of equatorial southeast Asia, both can be said to live in tropical habitats. Habitats can also be put into categories based on vegetation type. For example, we can also say orangutans live in rainforest habitats, while lions live in grassland habitats.</p>
                <p className={Styles.reading_txt}>No matter what kind of habitat we're talking about, we can be sure it contains many species that each form part of a complex ecosystem. An ecosystem in a terrestrial habitat usually involves a wide range of species including plants, animals, birds, insects and microorganisms in the soil. These organisms are linked in a variety of ways. Animals might eat other animals, or they might depend on plants for food. And the plants might depend on nutrients in the soil from the waste of these animals. Microorganisms might depend on dead bodies for food, and insects might play an essential role in the pollination of certain plants. If the insects disappear, the plants will eventually disappear as well if they can't produce seeds. And birds that depend on these plants for food as well as nest-building materials might also disappear, and so on.</p>
                <p className={Styles.reading_txt}>All of these connections among organisms in a habitat form an ecosystem, and while some organisms might survive changes to their ecosystem, many may not. The most vulnerable might even become endangered if important habitats are damaged or lost.</p>

                <h2 id="title-3">Word Checker</h2>
                <Quote>
                    <p>breeding (noun): the process by which organisms reproduce</p>
                    <p>coral reef (noun): a marine habitat around rock-like calcium formations created by colonies of living coral</p>
                    <p>marsh (noun): an area of soft, wet land that often floods during high tides or the rainy season</p>
                    <p>orangutan (noun): a large ape with long red hair and long arms that inhabits the jungles of Borneo and Sumatra</p>
                    <p>terrestrial (adjective): on or related to the Earth's land (as opposed to the sea or the sky) </p>
                </Quote>

            </div>
        ),
        questions: [
            {
                question: "1. A habitat is the _______ in which something lives.",
                choices: [
                    { isAnswer: false, label: "way" },
                    { isAnswer: false, label: "time" },
                    { isAnswer: true, label: "place" },
                ]
            },
            {
                question: "2. Which is most likely to be an apex predator?",
                choices: [
                    { isAnswer: false, label: "a tuna fish" },
                    { isAnswer: false, label: "a piranha fish" },
                    { isAnswer: true, label: "a killer whale" },
                ]
            },
            {
                question: "3. What type of habitat is a river?",
                choices: [
                    { isAnswer: false, label: "terrestrial" },
                    { isAnswer: true, label: "freshwater" },
                    { isAnswer: false, label: "marine" },
                ]
            },
            {
                question: "4. Which lives in a polar habitat?",
                choices: [
                    { isAnswer: false, label: "the polecat" },
                    { isAnswer: false, label: "the snow leopard" },
                    { isAnswer: true, label: "the emperor penguin" },
                ]
            },
            {
                question: "5. If many of its habitats are lost, a species can become",
                choices: [
                    { isAnswer: false, label: "invisible" },
                    { isAnswer: true, label: "endangered" },
                    { isAnswer: false, label: "dangerous" },
                ]
            },
        ],
        previous: "reading-exercises-II",
    },
    {
        id: "about-to",
        level: "Beginner",
        type: "Verb",
        title: "About to",
        image: randomBackground(),
        estimateTime: "10",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">Reading Exercises II</h1>
                <p>Please read the following text and try to answer the questions.</p>

                <h2 id="title-2">Natural Habitats</h2>
                <p className={Styles.reading_txt}>Every living thing has a particular place in which it lives, and we call this place its habitat. A good habitat provides everything an organism needs to survive. It provides food and shelter, places for breeding or laying eggs, the right kind of climate, and so on. Every particular type of organism, or species, needs a particular type of natural habitat. For some species it could be deep in a forest, while for others it could be deep in the ocean. No matter what type of habitat a species needs, it will have to share it with other species who have adapted to the same kind of natural environment.</p>
                <p className={Styles.reading_txt}>When many species share a particular habitat, some species will be food for other species, which in turn might be food for others even higher up the food chain. Food chains are just one of many relationship networks within a habitat that together form what we call an ecosystem. As such, every species becomes part of an ecosystem within its particular habitat. Lions, for example, live in habitats across the grasslands of central Africa. They are apex predators, which means they are at the top of the food chain in their ecosystem. The food chains that lions are part of include various grasses and other plants eaten by the animals that lions eat, such as zebras, buffaloes and giraffes.</p>
                <p className={Styles.reading_txt}>Habitats are often divided into three main types: terrestrial, freshwater and marine. Terrestrial habitats are places on land like forests, woodlands, grasslands and deserts, while freshwater habitats include rivers, lakes, ponds and inland swamps and marshes. Marine habitats include all those places that are part of the world's oceans such as coastal rock pools, coral reefs, open seas far from land, and seabeds on the ocean floor.</p>
                <p className={Styles.reading_txt}>Habitats can also be put into categories based on climate type. For example, polar bears and emperor penguins live in very cold polar habitats, while gorillas and orangutans live in much warmer tropical habitats. Even though gorillas inhabit mountain forests in equatorial Africa and orangutans live in the rainforests of equatorial southeast Asia, both can be said to live in tropical habitats. Habitats can also be put into categories based on vegetation type. For example, we can also say orangutans live in rainforest habitats, while lions live in grassland habitats.</p>
                <p className={Styles.reading_txt}>No matter what kind of habitat we're talking about, we can be sure it contains many species that each form part of a complex ecosystem. An ecosystem in a terrestrial habitat usually involves a wide range of species including plants, animals, birds, insects and microorganisms in the soil. These organisms are linked in a variety of ways. Animals might eat other animals, or they might depend on plants for food. And the plants might depend on nutrients in the soil from the waste of these animals. Microorganisms might depend on dead bodies for food, and insects might play an essential role in the pollination of certain plants. If the insects disappear, the plants will eventually disappear as well if they can't produce seeds. And birds that depend on these plants for food as well as nest-building materials might also disappear, and so on.</p>
                <p className={Styles.reading_txt}>All of these connections among organisms in a habitat form an ecosystem, and while some organisms might survive changes to their ecosystem, many may not. The most vulnerable might even become endangered if important habitats are damaged or lost.</p>

                <h2 id="title-3">Word Checker</h2>
                <Quote>
                    <p>breeding (noun): the process by which organisms reproduce</p>
                    <p>coral reef (noun): a marine habitat around rock-like calcium formations created by colonies of living coral</p>
                    <p>marsh (noun): an area of soft, wet land that often floods during high tides or the rainy season</p>
                    <p>orangutan (noun): a large ape with long red hair and long arms that inhabits the jungles of Borneo and Sumatra</p>
                    <p>terrestrial (adjective): on or related to the Earth's land (as opposed to the sea or the sky) </p>
                </Quote>

            </div>
        ),
        questions: [
            {
                question: "1. A habitat is the _______ in which something lives.",
                choices: [
                    { isAnswer: false, label: "way" },
                    { isAnswer: false, label: "time" },
                    { isAnswer: true, label: "place" },
                ]
            },
            {
                question: "2. Which is most likely to be an apex predator?",
                choices: [
                    { isAnswer: false, label: "a tuna fish" },
                    { isAnswer: false, label: "a piranha fish" },
                    { isAnswer: true, label: "a killer whale" },
                ]
            },
            {
                question: "3. What type of habitat is a river?",
                choices: [
                    { isAnswer: false, label: "terrestrial" },
                    { isAnswer: true, label: "freshwater" },
                    { isAnswer: false, label: "marine" },
                ]
            },
            {
                question: "4. Which lives in a polar habitat?",
                choices: [
                    { isAnswer: false, label: "the polecat" },
                    { isAnswer: false, label: "the snow leopard" },
                    { isAnswer: true, label: "the emperor penguin" },
                ]
            },
            {
                question: "5. If many of its habitats are lost, a species can become",
                choices: [
                    { isAnswer: false, label: "invisible" },
                    { isAnswer: true, label: "endangered" },
                    { isAnswer: false, label: "dangerous" },
                ]
            },
        ],
        previous: "reading-exercises-II",
    },
    {
        id: "british-food-vocabulary",
        level: "Beginner",
        type: "Verb",
        title: "British Food Vocabulary",
        image: randomBackground(),
        estimateTime: "10",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">Reading Exercises II</h1>
                <p>Please read the following text and try to answer the questions.</p>

                <h2 id="title-2">Natural Habitats</h2>
                <p className={Styles.reading_txt}>Every living thing has a particular place in which it lives, and we call this place its habitat. A good habitat provides everything an organism needs to survive. It provides food and shelter, places for breeding or laying eggs, the right kind of climate, and so on. Every particular type of organism, or species, needs a particular type of natural habitat. For some species it could be deep in a forest, while for others it could be deep in the ocean. No matter what type of habitat a species needs, it will have to share it with other species who have adapted to the same kind of natural environment.</p>
                <p className={Styles.reading_txt}>When many species share a particular habitat, some species will be food for other species, which in turn might be food for others even higher up the food chain. Food chains are just one of many relationship networks within a habitat that together form what we call an ecosystem. As such, every species becomes part of an ecosystem within its particular habitat. Lions, for example, live in habitats across the grasslands of central Africa. They are apex predators, which means they are at the top of the food chain in their ecosystem. The food chains that lions are part of include various grasses and other plants eaten by the animals that lions eat, such as zebras, buffaloes and giraffes.</p>
                <p className={Styles.reading_txt}>Habitats are often divided into three main types: terrestrial, freshwater and marine. Terrestrial habitats are places on land like forests, woodlands, grasslands and deserts, while freshwater habitats include rivers, lakes, ponds and inland swamps and marshes. Marine habitats include all those places that are part of the world's oceans such as coastal rock pools, coral reefs, open seas far from land, and seabeds on the ocean floor.</p>
                <p className={Styles.reading_txt}>Habitats can also be put into categories based on climate type. For example, polar bears and emperor penguins live in very cold polar habitats, while gorillas and orangutans live in much warmer tropical habitats. Even though gorillas inhabit mountain forests in equatorial Africa and orangutans live in the rainforests of equatorial southeast Asia, both can be said to live in tropical habitats. Habitats can also be put into categories based on vegetation type. For example, we can also say orangutans live in rainforest habitats, while lions live in grassland habitats.</p>
                <p className={Styles.reading_txt}>No matter what kind of habitat we're talking about, we can be sure it contains many species that each form part of a complex ecosystem. An ecosystem in a terrestrial habitat usually involves a wide range of species including plants, animals, birds, insects and microorganisms in the soil. These organisms are linked in a variety of ways. Animals might eat other animals, or they might depend on plants for food. And the plants might depend on nutrients in the soil from the waste of these animals. Microorganisms might depend on dead bodies for food, and insects might play an essential role in the pollination of certain plants. If the insects disappear, the plants will eventually disappear as well if they can't produce seeds. And birds that depend on these plants for food as well as nest-building materials might also disappear, and so on.</p>
                <p className={Styles.reading_txt}>All of these connections among organisms in a habitat form an ecosystem, and while some organisms might survive changes to their ecosystem, many may not. The most vulnerable might even become endangered if important habitats are damaged or lost.</p>

                <h2 id="title-3">Word Checker</h2>
                <Quote>
                    <p>breeding (noun): the process by which organisms reproduce</p>
                    <p>coral reef (noun): a marine habitat around rock-like calcium formations created by colonies of living coral</p>
                    <p>marsh (noun): an area of soft, wet land that often floods during high tides or the rainy season</p>
                    <p>orangutan (noun): a large ape with long red hair and long arms that inhabits the jungles of Borneo and Sumatra</p>
                    <p>terrestrial (adjective): on or related to the Earth's land (as opposed to the sea or the sky) </p>
                </Quote>

            </div>
        ),
        questions: [
            {
                question: "1. A habitat is the _______ in which something lives.",
                choices: [
                    { isAnswer: false, label: "way" },
                    { isAnswer: false, label: "time" },
                    { isAnswer: true, label: "place" },
                ]
            },
            {
                question: "2. Which is most likely to be an apex predator?",
                choices: [
                    { isAnswer: false, label: "a tuna fish" },
                    { isAnswer: false, label: "a piranha fish" },
                    { isAnswer: true, label: "a killer whale" },
                ]
            },
            {
                question: "3. What type of habitat is a river?",
                choices: [
                    { isAnswer: false, label: "terrestrial" },
                    { isAnswer: true, label: "freshwater" },
                    { isAnswer: false, label: "marine" },
                ]
            },
            {
                question: "4. Which lives in a polar habitat?",
                choices: [
                    { isAnswer: false, label: "the polecat" },
                    { isAnswer: false, label: "the snow leopard" },
                    { isAnswer: true, label: "the emperor penguin" },
                ]
            },
            {
                question: "5. If many of its habitats are lost, a species can become",
                choices: [
                    { isAnswer: false, label: "invisible" },
                    { isAnswer: true, label: "endangered" },
                    { isAnswer: false, label: "dangerous" },
                ]
            },
        ],
        previous: "reading-exercises-II",
    },
    {
        id: "chinese-food-vocab",
        level: "Intermediate",
        type: "Verb",
        title: "Chinese Food Vocabulary",
        image: randomBackground(),
        estimateTime: "10",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">Reading Exercises II</h1>
                <p>Please read the following text and try to answer the questions.</p>

                <h2 id="title-2">Natural Habitats</h2>
                <p className={Styles.reading_txt}>Every living thing has a particular place in which it lives, and we call this place its habitat. A good habitat provides everything an organism needs to survive. It provides food and shelter, places for breeding or laying eggs, the right kind of climate, and so on. Every particular type of organism, or species, needs a particular type of natural habitat. For some species it could be deep in a forest, while for others it could be deep in the ocean. No matter what type of habitat a species needs, it will have to share it with other species who have adapted to the same kind of natural environment.</p>
                <p className={Styles.reading_txt}>When many species share a particular habitat, some species will be food for other species, which in turn might be food for others even higher up the food chain. Food chains are just one of many relationship networks within a habitat that together form what we call an ecosystem. As such, every species becomes part of an ecosystem within its particular habitat. Lions, for example, live in habitats across the grasslands of central Africa. They are apex predators, which means they are at the top of the food chain in their ecosystem. The food chains that lions are part of include various grasses and other plants eaten by the animals that lions eat, such as zebras, buffaloes and giraffes.</p>
                <p className={Styles.reading_txt}>Habitats are often divided into three main types: terrestrial, freshwater and marine. Terrestrial habitats are places on land like forests, woodlands, grasslands and deserts, while freshwater habitats include rivers, lakes, ponds and inland swamps and marshes. Marine habitats include all those places that are part of the world's oceans such as coastal rock pools, coral reefs, open seas far from land, and seabeds on the ocean floor.</p>
                <p className={Styles.reading_txt}>Habitats can also be put into categories based on climate type. For example, polar bears and emperor penguins live in very cold polar habitats, while gorillas and orangutans live in much warmer tropical habitats. Even though gorillas inhabit mountain forests in equatorial Africa and orangutans live in the rainforests of equatorial southeast Asia, both can be said to live in tropical habitats. Habitats can also be put into categories based on vegetation type. For example, we can also say orangutans live in rainforest habitats, while lions live in grassland habitats.</p>
                <p className={Styles.reading_txt}>No matter what kind of habitat we're talking about, we can be sure it contains many species that each form part of a complex ecosystem. An ecosystem in a terrestrial habitat usually involves a wide range of species including plants, animals, birds, insects and microorganisms in the soil. These organisms are linked in a variety of ways. Animals might eat other animals, or they might depend on plants for food. And the plants might depend on nutrients in the soil from the waste of these animals. Microorganisms might depend on dead bodies for food, and insects might play an essential role in the pollination of certain plants. If the insects disappear, the plants will eventually disappear as well if they can't produce seeds. And birds that depend on these plants for food as well as nest-building materials might also disappear, and so on.</p>
                <p className={Styles.reading_txt}>All of these connections among organisms in a habitat form an ecosystem, and while some organisms might survive changes to their ecosystem, many may not. The most vulnerable might even become endangered if important habitats are damaged or lost.</p>

                <h2 id="title-3">Word Checker</h2>
                <Quote>
                    <p>breeding (noun): the process by which organisms reproduce</p>
                    <p>coral reef (noun): a marine habitat around rock-like calcium formations created by colonies of living coral</p>
                    <p>marsh (noun): an area of soft, wet land that often floods during high tides or the rainy season</p>
                    <p>orangutan (noun): a large ape with long red hair and long arms that inhabits the jungles of Borneo and Sumatra</p>
                    <p>terrestrial (adjective): on or related to the Earth's land (as opposed to the sea or the sky) </p>
                </Quote>

            </div>
        ),
        questions: [
            {
                question: "1. A habitat is the _______ in which something lives.",
                choices: [
                    { isAnswer: false, label: "way" },
                    { isAnswer: false, label: "time" },
                    { isAnswer: true, label: "place" },
                ]
            },
            {
                question: "2. Which is most likely to be an apex predator?",
                choices: [
                    { isAnswer: false, label: "a tuna fish" },
                    { isAnswer: false, label: "a piranha fish" },
                    { isAnswer: true, label: "a killer whale" },
                ]
            },
            {
                question: "3. What type of habitat is a river?",
                choices: [
                    { isAnswer: false, label: "terrestrial" },
                    { isAnswer: true, label: "freshwater" },
                    { isAnswer: false, label: "marine" },
                ]
            },
            {
                question: "4. Which lives in a polar habitat?",
                choices: [
                    { isAnswer: false, label: "the polecat" },
                    { isAnswer: false, label: "the snow leopard" },
                    { isAnswer: true, label: "the emperor penguin" },
                ]
            },
            {
                question: "5. If many of its habitats are lost, a species can become",
                choices: [
                    { isAnswer: false, label: "invisible" },
                    { isAnswer: true, label: "endangered" },
                    { isAnswer: false, label: "dangerous" },
                ]
            },
        ],
        previous: "reading-exercises-II",
    },
    {
        id: "french-food-vocabulary",
        level: "Intermediate",
        type: "Verb",
        title: "French Food Vocabulary",
        image: randomBackground(),
        estimateTime: "10",
        price: 0,
        tutorialContent: (
            <div>
                <h1 id="title-1">Reading Exercises II</h1>
                <p>Please read the following text and try to answer the questions.</p>

                <h2 id="title-2">Natural Habitats</h2>
                <p className={Styles.reading_txt}>Every living thing has a particular place in which it lives, and we call this place its habitat. A good habitat provides everything an organism needs to survive. It provides food and shelter, places for breeding or laying eggs, the right kind of climate, and so on. Every particular type of organism, or species, needs a particular type of natural habitat. For some species it could be deep in a forest, while for others it could be deep in the ocean. No matter what type of habitat a species needs, it will have to share it with other species who have adapted to the same kind of natural environment.</p>
                <p className={Styles.reading_txt}>When many species share a particular habitat, some species will be food for other species, which in turn might be food for others even higher up the food chain. Food chains are just one of many relationship networks within a habitat that together form what we call an ecosystem. As such, every species becomes part of an ecosystem within its particular habitat. Lions, for example, live in habitats across the grasslands of central Africa. They are apex predators, which means they are at the top of the food chain in their ecosystem. The food chains that lions are part of include various grasses and other plants eaten by the animals that lions eat, such as zebras, buffaloes and giraffes.</p>
                <p className={Styles.reading_txt}>Habitats are often divided into three main types: terrestrial, freshwater and marine. Terrestrial habitats are places on land like forests, woodlands, grasslands and deserts, while freshwater habitats include rivers, lakes, ponds and inland swamps and marshes. Marine habitats include all those places that are part of the world's oceans such as coastal rock pools, coral reefs, open seas far from land, and seabeds on the ocean floor.</p>
                <p className={Styles.reading_txt}>Habitats can also be put into categories based on climate type. For example, polar bears and emperor penguins live in very cold polar habitats, while gorillas and orangutans live in much warmer tropical habitats. Even though gorillas inhabit mountain forests in equatorial Africa and orangutans live in the rainforests of equatorial southeast Asia, both can be said to live in tropical habitats. Habitats can also be put into categories based on vegetation type. For example, we can also say orangutans live in rainforest habitats, while lions live in grassland habitats.</p>
                <p className={Styles.reading_txt}>No matter what kind of habitat we're talking about, we can be sure it contains many species that each form part of a complex ecosystem. An ecosystem in a terrestrial habitat usually involves a wide range of species including plants, animals, birds, insects and microorganisms in the soil. These organisms are linked in a variety of ways. Animals might eat other animals, or they might depend on plants for food. And the plants might depend on nutrients in the soil from the waste of these animals. Microorganisms might depend on dead bodies for food, and insects might play an essential role in the pollination of certain plants. If the insects disappear, the plants will eventually disappear as well if they can't produce seeds. And birds that depend on these plants for food as well as nest-building materials might also disappear, and so on.</p>
                <p className={Styles.reading_txt}>All of these connections among organisms in a habitat form an ecosystem, and while some organisms might survive changes to their ecosystem, many may not. The most vulnerable might even become endangered if important habitats are damaged or lost.</p>

                <h2 id="title-3">Word Checker</h2>
                <Quote>
                    <p>breeding (noun): the process by which organisms reproduce</p>
                    <p>coral reef (noun): a marine habitat around rock-like calcium formations created by colonies of living coral</p>
                    <p>marsh (noun): an area of soft, wet land that often floods during high tides or the rainy season</p>
                    <p>orangutan (noun): a large ape with long red hair and long arms that inhabits the jungles of Borneo and Sumatra</p>
                    <p>terrestrial (adjective): on or related to the Earth's land (as opposed to the sea or the sky) </p>
                </Quote>

            </div>
        ),
        questions: [
            {
                question: "1. A habitat is the _______ in which something lives.",
                choices: [
                    { isAnswer: false, label: "way" },
                    { isAnswer: false, label: "time" },
                    { isAnswer: true, label: "place" },
                ]
            },
            {
                question: "2. Which is most likely to be an apex predator?",
                choices: [
                    { isAnswer: false, label: "a tuna fish" },
                    { isAnswer: false, label: "a piranha fish" },
                    { isAnswer: true, label: "a killer whale" },
                ]
            },
            {
                question: "3. What type of habitat is a river?",
                choices: [
                    { isAnswer: false, label: "terrestrial" },
                    { isAnswer: true, label: "freshwater" },
                    { isAnswer: false, label: "marine" },
                ]
            },
            {
                question: "4. Which lives in a polar habitat?",
                choices: [
                    { isAnswer: false, label: "the polecat" },
                    { isAnswer: false, label: "the snow leopard" },
                    { isAnswer: true, label: "the emperor penguin" },
                ]
            },
            {
                question: "5. If many of its habitats are lost, a species can become",
                choices: [
                    { isAnswer: false, label: "invisible" },
                    { isAnswer: true, label: "endangered" },
                    { isAnswer: false, label: "dangerous" },
                ]
            },
        ],
        previous: "reading-exercises-II",
    },
    
];
