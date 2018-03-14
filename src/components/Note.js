import React from 'react';
import Glyphicon from "react-bootstrap/es/Glyphicon";
import PropTypes from 'prop-types';
import ButtonGroup from "react-bootstrap/es/ButtonGroup";

/**
 * Note Statless component
 * @param props
 * @constructor
 */
const Note = (props) => ( <li>
    <div className={`rotate-1 ${props.color}-bg`}>
        <small>{props.updateAt}</small>
        <h4>{props.title}</h4>
        <p>{props.content}</p>

<p className="tools">
        <button className="btn-danger btn btn-sm trash">
            <Glyphicon glyph="trash"/>
        </button>
        <button className="btn-default btn btn-sm trash">
            <Glyphicon glyph="pencil"/>
        </button>

</p>
    </div>
</li>);
/**
 * Note check propos
 * @type {{color: *, title: *}}
 */
Note.propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    updateAt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,

};
export {Note};
export default Note;