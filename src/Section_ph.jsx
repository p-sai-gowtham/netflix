import './Section_ph.css';

export default function SectionPh({ title, content, eimg, phTitle, phContent, phImg, loader }) {
    return (
        <section>
            <div className='section-ph'>
                <img className='eimg' src={eimg} alt="external img" />
                <div className='bottom-menu'>
                    <div className='bottom-start'>
                        <img className='ph-img' src={phImg} alt="stranger things" />
                        <div>
                            <h3 className='pht'>{phTitle}</h3>
                            <h3 className='phc'>{phContent}</h3>
                        </div>
                    </div>
                    <img className='loader' src={loader} alt="loader" />
                </div>
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