import Button from "./Button";
import './Email.css';

export default function Email() {
    return (
        <>
            <h2 className='inner-text'>
                Ready to watch? Enter your email to create or restart your membership.
            </h2>
            <div className="email">
                <input type="text" placeholder="Email address" />
                <Button size="btn-large">
                    Get Started &#62;
                </Button>
            </div>
        </>
    );
}