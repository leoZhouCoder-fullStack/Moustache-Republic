import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jsdom-global/register'

global.cancelAnimationFrame = function (callback) {
  setTimeout(callback, 0)
}
global.requestAnimationFrame = callback => {
  setTimeout(callback, 0)
}

Enzyme.configure({ adapter: new Adapter() })
