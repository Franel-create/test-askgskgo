import replace from 'gulp-replace'; //Search and replace text in files using node streams
import plumber from 'gulp-plumber'; // Prevent pipe breaking caused by errors from gulp plugins
import notify from 'gulp-notify'; // Sends message notification to you
import browserSync from 'browser-sync'; // Time-saving synchronised browser testing
import newer from 'gulp-newer'; // Pass through newer source files only, based on the destination
import ifPlugin from 'gulp-if'; // Conditionally run a task

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    newer: newer,
    ifPlugin: ifPlugin
}