import 'jsdom-global/register';
import { JSDOM } from 'jsdom';

const global: any = {};

const doc = new JSDOM("<!doctype html><html><body></body></html>");
global.document = doc;
global.window = global.document.defaultView;