// @flow
import React from 'react';
import {withLocalize} from 'react-localize-redux';
import classnames from 'classnames/bind';

// Redux
import {connect} from "react-redux";
import {setLanguage} from "store/idiomas/actions";
import {compose} from "redux";

const mapStateToProps = state => {
    return {
        idiomasReducer: state.idiomasReducer
    };
};

const mapDispatchToProps = dispatch => ({
    setLanguage: lang => dispatch(setLanguage(lang))
});

const LanguageToggle = ({setLanguage, idiomasReducer}) => {
    const { currentLanguage, languages } = idiomasReducer;

    const changeCurrentLang = (pageLang) => {
        setLanguage(pageLang);
    };

    // console.log(idiomasReducer.currentLanguage);

    return (
        <ul className="selector language-box">
            {languages.map(language =>
                <li key={language} className={classnames({ 'active': currentLanguage === language })}
                    onClick={(e) => changeCurrentLang(language)}
                >
                    <button className={classnames({ 'active': currentLanguage === language })}
                       onClick={() => changeCurrentLang(language)}>
                        {(currentLanguage === 'es') ? ('ENG') : ('ESP')} <span className="caret"/>
                    </button>
                </li>
            )}
        </ul>
    );

};

export default compose(
  withLocalize,
  connect(mapStateToProps, mapDispatchToProps)
)(LanguageToggle);