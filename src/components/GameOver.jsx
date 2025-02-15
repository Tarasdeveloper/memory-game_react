import RegularButton from './RegularButton';

export default function GameOver({ handleClick }) {
    return (
        <div className="wrapper wrapper--accent">
            <p className="p--large">
                You&apos;ve matched all the memory cards!
            </p>
            <RegularButton handleClick={handleClick}>Play again</RegularButton>
        </div>
    );
}
