import Button from "./Button";
import './Email.css';

export default function Email() {
    return (
        <div className="email">
            <input type="text" placeholder="Email address" />
            <Button size="btn-large">
                Get Started &#62;
            </Button>
        </div>
    );
}