import mockPopup from '../popup/popup';
import mockVotes from '../votes/votes';
import mockFooter from '../footer/footer';
import mockBanner from '../banner/banner';
import mockAccessBar from '../accessBar/accessBar';
import mockClosingBar from '../closingBar/closingBar';
import mockSecondaryBanner from '../secondaryBanner/secondaryBanner';

class App {
  static boot() {
    this.cms = {
      getHome: jest.fn().mockReturnValue({
        header: {
          accessBar: mockAccessBar,
          banner: mockBanner,
          closingBar: mockClosingBar
        },
        popup: mockPopup,
        votes: mockVotes,
        secondaryBanner: mockSecondaryBanner,
        footer: mockFooter
      })
    };
  }

  static getInstance() {
    if (this.load) return this;
    this.boot();
    return this;
  }
}

export default App;
