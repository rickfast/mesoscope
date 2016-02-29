class ProgressBars {

  static klazz(app) {
    let klazz = '';
    if (app.deployments.length != 0) {
      klazz = 'progress-bar-striped active';
    } else if (app.tasksUnhealthy) {
      klazz = 'progress-bar-danger';
    } else {
      klazz = 'progress-bar-success';
    }
    return `progress-bar ${klazz}`;
  }
}

export default ProgressBars;
