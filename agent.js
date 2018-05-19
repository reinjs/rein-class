/**
 * BaseContextClass is a base class that can be extended,
 * it's instantiated in context level,
 * {@link Service} is extending it.
 */
module.exports = class BaseAgentClass {
  
  /**
   * @constructor
   * @param {Context} ctx - context instance
   * @since 1.0.0
   */
  constructor(app, name) {
    this.app = app;
    this.name = name;
  }
  
  get config() {
    return this.app.plugins[this.name]
      ? this.app.plugins[this.name].config
      : this.app.config;
  }
  
  /**
   * @computed {Service} BaseContextClass#logger
   * @returns {*}
   */
  get logger() {
    return this.app.logger;
  }
};