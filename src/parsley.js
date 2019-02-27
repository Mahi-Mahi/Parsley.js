import $ from 'jquery';
import Parsley from './parsley/main';
import './parsley/pubsub';
import './parsley/remote';
import './i18n/en';
import inputevent from 'inputevent';

inputevent.install();
console.log({parlseyVersion: 'custom-mahi'});

export default Parsley;
