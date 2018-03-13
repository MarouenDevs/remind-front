import React from 'react';
import Glyphicon from "react-bootstrap/es/Glyphicon";
import PropTypes from 'prop-types';

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
        <button className="pull-right btn-danger btn trash">
            <Glyphicon glyph="trash"/>
        </button>
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