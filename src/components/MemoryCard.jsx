import { decodeEntity } from 'html-entities';

export default function MemoryCard({ handleClick, data }) {
    // const emojiArray = [
    //     '🐶',
    //     '🐷',
    //     '🐙',
    //     '🐛',
    //     '🐵',
    //     '🐶',
    //     '🐷',
    //     '🐙',
    //     '🐛',
    //     '🐵',
    // ];

    const emojiEl = data.map((emoji, index) => (
        <li key={index} className="card-item">
            <button
                className="btn btn--emoji"
                onClick={() => handleClick(emoji.name, index)}
            >
                {decodeEntity(emoji.htmlCode[0])}
            </button>
        </li>
    ));

    return <ul className="card-container">{emojiEl}</ul>;
}
