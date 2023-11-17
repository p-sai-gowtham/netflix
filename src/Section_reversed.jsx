export default function SectionReversed({ title, content, eimg }) {
    return (
        <section>
            <div className="section-img">
                <img src={eimg} alt="external img" />
            </div>
            <div className="section-content">
                <h2 className="title">
                    {title}
                </h2>
                <h3 className="innert-section-content">
                    {content}
                </h3>
            </div>
        </section>
    );
}