import { decodeEntity } from 'html-entities';
import EmojiButton from './EmojiButton';

export default function MemoryCard({ handleClick, data }) {
    const cardEl = data.map((emoji, index) => (
        <li key={index} className="card-item">
            <EmojiButton
                style="btn btn--emoji"
                content={decodeEntity(emoji.htmlCode[0])}
                handleClick={() => handleClick(emoji.name, index)}
            />
        </li>
    ));

    return <ul className="card-container">{cardEl}</ul>;
}

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
