import React, { useRef, useState } from "react";
import Styles from "./search.module.css";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Skeleton from '@mui/material/Skeleton';

function SearchBar({
    className,
    placeholder,
    value,
    onChange,
    showPopper = false,
    popperResults,
    onItemClick,
    onSubmit
}) {
    const [isSearching, setIsSearching] = useState(false);
    const anchorRef = useRef(null);

    return (
        <form
            ref={anchorRef}
            id="search-form"
            className={`${Styles.container} ${className}`}
            aria-controls={isSearching ? 'search-list' : undefined}
            aria-expanded={isSearching ? 'true' : undefined}
            aria-haspopup="true"
            onClick={() => setIsSearching(true)}
            onSubmit={onSubmit}
        >
            <input
                type="text"
                className={Styles.search_input}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <button
                className={Styles.search_button}
                type="submit"
            >
                <svg
                    className={Styles.search_icon}
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                >
                    <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
            </button>

            {isSearching && showPopper && (
                <Popper
                    open={isSearching}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="top-start"
                    transition
                    disablePortal
                    sx={{width: "100%", maxHeight: "270px"}}
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'top-start' ? 'right top' : 'right bottom',
                            }}
                        >
                            <div className={Styles.popper}>
                                <ClickAwayListener onClickAway={() => setIsSearching(false)}>
                                    <MenuList
                                        id="search-list"
                                        aria-labelledby="search-form"
                                    >
                                        {popperResults?.length === 0 ?
                                            (
                                                <div className={Styles.skeleton}>
                                                    <Skeleton variant="rounded" width={"100%"} height={30} />
                                                    <Skeleton variant="rounded" width={"100%"} height={30} />
                                                    <Skeleton variant="rounded" width={"100%"} height={30} />
                                                    <Skeleton variant="rounded" width={"100%"} height={30} />
                                                    <Skeleton variant="rounded" width={"100%"} height={30} />
                                                    <Skeleton variant="rounded" width={"100%"} height={30} />
                                                </div>
                                            ): popperResults?.map(result => (
                                                <MenuItem
                                                    onClick={() => {
                                                        setIsSearching(false);
                                                        onItemClick(result);
                                                    }}
                                                    sx={{
                                                        width: '100%',
                                                        overflow: 'hidden',
                                                        whiteSpace: 'nowrap',
                                                        textOverflow: 'ellipsis',
                                                    }}
                                                >
                                                    {result.title}
                                                </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </div>
                        </Grow>
                    )}
                </Popper>
                )}
        </form>
    );
}

export default SearchBar;
