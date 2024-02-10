export const ForecastItem = ({ data }) => {
    return (
        <div className='accordion-item'>
            <h2 className='accordion-header'>
                <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target={`#collapse${data}`}
                    aria-expanded='false'
                    aria-controls={`collapse${data}`}
                >
                    Accordion Item #{data}
                </button>
            </h2>
            <div
                id={`collapse${data}`}
                className='accordion-collapse collapse'
                data-bs-parent='#accordionExample'
            >
                <div className='accordion-body'>
                    <strong>This is the #{data} item's accordion body.</strong>
                </div>
            </div>
        </div>
    );
};
