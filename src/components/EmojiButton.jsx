export default function EmojiButton({
    content,
    style,
    handleClick,
    selectedCardEntry,
    matchedCardEntry,
}) {
    const btnContent = selectedCardEntry || matchedCardEntry ? content : '?';

    return (
        <button className={style} onClick={handleClick}>
            {btnContent}
        </button>
    );
}
