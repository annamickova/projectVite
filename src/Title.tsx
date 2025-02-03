import React from "react";

interface TitleProps {
    text: string;
    color?: string;
}

const Title: React.FC<TitleProps> = ({ text, color = 'black' }) => {
    return <h2 style={{ color: color }}>{text}</h2>;
};

export default Title;