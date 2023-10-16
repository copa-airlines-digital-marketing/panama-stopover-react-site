import React from "react"
import PropTypes from "prop-types"
import Box from "@material-ui/core/Box"
import TypographyCo from "../../ui/typography/typographyCo"
import SwitchCo from "../../ui/switch/switchCo"

import useStyles from "../../styles"

const TabPanel = (props) => {
  const {
    children,
    value,
    index,
    stopover,
    handleStopovoer,
    stopoverText,
    ...other
  } = props
  const styles = useStyles()
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      data-cy={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && children && (
        <>
          {index === 2 && (
            <Box className={styles.boxClone}>
              <TypographyCo variant="body1" className={styles.stopoverTitle}>
                {stopoverText}
              </TypographyCo>
              <SwitchCo
                switch={stopover}
                checked={stopover}
                handleChange={handleStopovoer}
              />
            </Box>
          )}
          <Box className={styles.box}>{children}</Box>
        </>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  stopover: PropTypes.bool,
  handleStopovoer: PropTypes.func,
  stopoverText: PropTypes.string,
}

TabPanel.defaultProps = {
  children: null,
  stopover: false,
  handleStopovoer: null,
  stopoverText: "",
}

export default TabPanel
