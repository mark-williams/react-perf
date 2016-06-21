import React from 'react';

const Chosen = (props) => (
    <h4>
        { props.selection.map(
            (n) => { return <span key={ n } className="chosen">{ n }</span> }
        )}
    </h4>
);

export default Chosen;