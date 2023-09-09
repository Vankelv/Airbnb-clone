import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import {
  RamenDining,
  BeachAccess,
  Waves,
  Surfing,
  Castle,
  DinnerDining,
  BedroomParent,
  SportsTennis,
  SoupKitchen,
  Whatshot,
  SportsGolf,
  LocationCity,
  Pool,
  Key,
  Villa,
  Bathroom,
} from "@mui/icons-material";
import "../assets/styles/main.css";
import { Container, Col, Row } from "react-bootstrap";
import FilterIcon from "./FilterIcon";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizontal-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `horizontal-tab-${index}`,
    "aria-controls": `horizontal-tabpanel-${index}`,
  };
}

// Filter switch
const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));
//    END OF FILTER SWITCH

const Listings = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Container className="fixedPad">
        <Row className="tabsItems">
          <Col style={{ width: "80%" }}>
            <Box sx={{ flexGrow: 1, bgcolor: "background.paper" }}>
              <Tabs
                orientation="horizontal" // Change orientation to horizontal
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Horizontal tabs example"
              >
                <Tab
                  icon={<RamenDining />}
                  label="Breakfast"
                  {...a11yProps(0)}
                />
                <Tab
                  icon={<BeachAccess />}
                  label="Beachfront"
                  {...a11yProps(1)}
                  className="TabItem"
                />
                <Tab icon={<Waves />} label="Lake" {...a11yProps(2)} />
                <Tab icon={<Surfing />} label="Surfing" {...a11yProps(3)} />
                <Tab icon={<DinnerDining />} label="Rooms" {...a11yProps(4)} />
                <Tab
                  icon={<BedroomParent />}
                  label="Bed rooms"
                  {...a11yProps(5)}
                />
                <Tab icon={<Castle />} label="Castle" {...a11yProps(6)} />
                <Tab icon={<SportsTennis />} label="Play" {...a11yProps(6)} />
                <Tab
                  icon={<SoupKitchen />}
                  label="Kitchens"
                  {...a11yProps(7)}
                />
                <Tab icon={<Whatshot />} label="Trending" {...a11yProps(8)} />
                <Tab icon={<LocationCity />} label="City" {...a11yProps(10)} />
                <Tab icon={<Bathroom />} label="Bathrooms" {...a11yProps(11)} />
                <Tab icon={<Pool />} label="Pool" {...a11yProps(12)} />
                <Tab icon={<Villa />} label="Villa" {...a11yProps(13)} />
                <Tab icon={<Key />} label="New" {...a11yProps(14)} />
              </Tabs>
            </Box>
          </Col>
          <Col className="filter">
            <p>
              <FilterIcon />
              <span>Filter</span>
            </p>
            <FormGroup className="priceSwitch">
              <FormControlLabel
                control={<Android12Switch defaultChecked />}
                labelPlacement="start"
                label="Display total before taxes"
              />
            </FormGroup>
          </Col>
        </Row>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
        <TabPanel value={value} index={7}>
          Item Seven
        </TabPanel>
        <TabPanel value={value} index={8}>
          Item Seven
        </TabPanel>
        <TabPanel value={value} index={9}>
          Item Seven
        </TabPanel>
        <TabPanel value={value} index={10}>
          Item Seven
        </TabPanel>
        <TabPanel value={value} index={11}>
          Item Seven
        </TabPanel>

      </Container>
    </div>
  );
};

export default Listings;
