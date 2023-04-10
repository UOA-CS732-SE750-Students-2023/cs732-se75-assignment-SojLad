import { ChangeEvent } from "react";
import { optionType } from "./types";
import { Link } from "react-router-dom";

type PropsType = {
    userSearch: string;
    options: [];
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onOptionChosen: (option: optionType) => void;
    onSearch: () => void;
};

const Home = ({
    userSearch,
    options,
    onInputChange,
    onOptionChosen,
    onSearch,
}: PropsType): JSX.Element => {
    return (
        <div
            className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center 
                    justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white 
                    bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded text-zinc-700"
        >
            <div className="relative">
                <h1 className="text-4xl font-bold">Weather Tech Demo</h1>

                <p className="py-3">Enter a Location Below</p>
                <div>
                    <input
                        type="text"
                        value={userSearch}
                        className="rounded py-3 px-6"
                        onChange={onInputChange}
                    />

                    <ul className="absolute bg-white rounded">
                        {options.map((option: optionType, index: number) => (
                            <li key={option.name + index}>
                                <button
                                    className="hover:bg-red-100 cursor-pointer text-left w-full px-2 py-1"
                                    onClick={() => onOptionChosen(option)}
                                >
                                    {option.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <Link
                        to="/forecast"
                        onClick={onSearch}
                        className="px-3 py-2 border-2 border-red-100 rounded cursor-pointer"
                    >
                        Search
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
