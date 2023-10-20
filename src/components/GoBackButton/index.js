import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import { withRouter } from "store/withRouter";

const GoBackButton = ({children, classNames, history}) => {
    const goBackAction = () => {
        history.goBack();
    };
    return (
        <button
            type="button"
            onClick={goBackAction}
            className={classnames({
                "go-back-button btn-primary btn--border": true,
                [classNames]: classNames !== undefined
            })}
        >
            {children}
        </button>
    );
};
GoBackButton.propTypes = {
    // Para que el contenido del botón sea más personalizado
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    classNames: PropTypes.string
};
export default withRouter(GoBackButton);