import './Section.css';

export default function Section({ title, content, eimg, iimg , isTv}) {
    return (
        <section>
            <div className="section-content">
                <h2 className="title">
                    {title}
                </h2>
                <h3 className="innert-section-content">
                    {content}
                </h3>
            </div>
            <div className="section-img">
                <img src={eimg} className='eimg' alt="external img" />
                {!isTv ? (
                    <video autoPlay muted className='vbt' >
                        <source src={iimg} />
                    </video>
                ) : (
                    <video autoPlay muted className='vt' width="480" height="290" >
                        <source src={iimg} />
                    </video>
                )}
            </div>
        </section>
    );
}