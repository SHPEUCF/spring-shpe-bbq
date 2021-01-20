import React from 'react';
import '../styles/Dashboard.scss';
import { mondayData, tuesdayData } from '../data/companyList';
import { companyData } from '../data/companyData';
import {
  AppBar,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Toolbar,
  Tooltip,
  TextField
} from '@material-ui/core';

export default class Dashboard extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    show : false,
    showVideo : true,
    currCompany: '',
    image: '',
    search: '',
  }
  this.showModal = this.showModal.bind(this);
  this.hideModal = this.hideModal.bind(this);
} 

renderHeader() {
  return (
    <div id='header'>
      <br></br>
      <img id='headImg' src={require('../assets/shpe/bbqLogo.png').default} alt='image unavailable'/>
      <h4>
      Welcome to SHPE UCF's 2020 Virtual Industry BBQ! <br></br><br></br>
      Please fill out the RSVP form and watch the tutorial by clicking the buttons below.<br></br> 
      Paid SHPE UCF members will have resumes shared with the participating companies upon request.
      </h4>
        <Tooltip title='Click me to watch a quick video on how to use our site.'>
          <Button 
            color='inherit' 
            onClick={ () => { window.open('https://www.youtube.com/watch?v=6TY12PnG8eg', '_blank') } }
          >
            Tutorial Video
          </Button>
        </Tooltip>
        <Tooltip title='Click me to fill out our SHPE Industry BBQ Student RSVP form'>
          <Button 
            color='inherit' 
            onClick={ () => { window.open('https://docs.google.com/forms/d/e/1FAIpQLSe262y4DPdW_cFpWoFnTRTtwEAnOc9iHj7tqzVBGPtMzWdLNw/viewform', '_blank') } }
          >
            RSVP form
          </Button>
        </Tooltip>
    </div>
  )
}
renderVideoDialog() {
  return (
    <div>
      <Dialog
        open= { this.state.showVideo }
        onClose= { () => this.hideModal(false) }
      >
        <DialogTitle>
          A Message from Our President
        </DialogTitle>
        <DialogContent>
          <DialogContent>
          <iframe width='500' height='315' src='https://www.youtube-nocookie.com/embed/_bLta_fWIYM' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
          </DialogContent>
        </DialogContent>
        <DialogActions>
          <Button size='small' color='primary' onClick={ () => this.hideModal(false) }>
                Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
  handleSearchChange = async (e)  => {
    await this.setState({search: e.target.value});
  }
                   
  renderSearch() {
    return(
      <div id='searchInput' >
        <AppBar
          id='appbar'
          color='inherit'
          position='fixed'
        >
          <Toolbar>
            <div id='searchInput' >
            <img id='pic' src={require('../assets/shpe/shpelogo.png').default} alt='image unavailable' />
              <TextField
                id = 'search'
                label='Search for a Company'
                type='text'
                variant='standard'
                onChange={(e) => this.handleSearchChange(e)}
                value={this.state.search}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }


  showModal = (bool, companyName) => {
    let img;
    companyData.map(company => {
      if (this.state.currCompany === company.name) {
        img = company.img;
      }
    });
    this.setState({
      currCompany: companyName,
      show: bool,
      image: img,
    });
  };

  hideModal = (val) => {
    this.setState({
      show: val,
      showVideo: val
    });
  };

  getZoomLink = (e) => {
    e.preventDefault();
    let ref;
    companyData.map(company => {
      if (this.state.currCompany === company.name) {
        ref = company.zoomLink;
      }
    });
    window.open(ref, '_blank');
  }

  getCareersLink = (e) => {
    e.preventDefault();
    let ref;
    companyData.map(company => {
      if (this.state.currCompany === company.name) {
        ref = company.careersLink;
      }
    });
    window.open(ref, '_blank');
  }

  renderDialog(prop) {
    return (
      <div>
        <Dialog
          open={this.state.show}
          onClose={() => this.hideModal(false)}
        >
          <DialogTitle>
            {
              companyData.map(company => {
                if (this.state.currCompany === company.name) {
                  return company.title;
                }
              })
            }
          </DialogTitle>
          <DialogContent>
          <DialogContent>
              {
              companyData.map(company => {
                if (this.state.currCompany === company.name) {
                  return <img id='img' src={company.img} alt='image unavailable' />;
                }
              })
            }
            </DialogContent>
            <DialogContentText>
              {
                companyData.map(company => {
                  if (this.state.currCompany === company.name) {
                    return company.desc;
                  }
                })
              }
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button size='small' color='primary' onClick={(e) => this.getCareersLink(e)}>
                    Careers
            </Button>
            <Button size='small' color='primary' onClick={(e) => this.getZoomLink(e)}>
                    Join Zoom
            </Button>
            <Button size='small' color='primary' onClick={() => this.hideModal(false)}>
                  Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  renderMonday(props) {
    let filterCompanies = mondayData.filter(company => {
      return company.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
    return (
      <Grid container className = 'layout'>
          {
            filterCompanies.map((company) => 
              <Card className = 'cards'
                key={ company.id }>
                  <CardActionArea onClick={() => this.showModal(true, company.name)}>
                    <CardMedia
                      component = 'img'
                      alt = { company.name }
                      image = { company.img }
                      title = { company.name }
                      
                    />
                    <CardContent  >
                      <Typography variant='body1' color='textSecondary' component='p'>
                      { company.desc }
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
          )};
        </Grid>
    );
  }

  renderTuesday(props) {
    let filterCompanies = tuesdayData.filter(company => {
      return company.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
    return (
      <Grid container className = 'layout'>
          {filterCompanies.map((company) => 
           <Card className = 'cards'
            key={ company.id }>
              <CardActionArea onClick={() => this.showModal(true, company.name)} >
                <CardMedia
                  component = 'img'
                  alt = { company.name }s
                  image = { company.img }
                  title = { company.name }
                />
                <CardContent>
                  <Typography variant='body1' color='textSecondary' component='p'>
                  { company.desc }
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )};
        </Grid>
    );
  }



  render() {
	  return(
		  <div id = 'home'>
        { this.renderVideoDialog() }
        { this.renderSearch() }
        { this.renderHeader() }
        { this.renderDialog() }
        { this.renderMonday() }
        {/* { this.renderTuesday() } */}
        <div id='footer'>
          <img id='pic2' src={require('../assets/shpe/career_services.png').default} alt='image unavailable'/>
          <h6 id='footerText'>
            Brought to you by the <a className='ref' target='_blank' href='https://tech.shpeucf.com/' >SHPE UCF Tech Committee.</a>
            <br></br>
            Want to learn more about SHPE UCF? Check out our Youtube channel - <a className='ref' target='_blank' href='https://www.youtube.com/user/shpeucfchapter'>SHPE UCF</a>
          </h6>
          <img id='pic3' src={require('../assets/shpe/ODI.png').default} alt='image unavailable'/>
        </div>
		  </div>
	  );
  }
}