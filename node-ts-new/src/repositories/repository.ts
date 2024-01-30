class Repository {
  model: any;

  constructor() {
    this.model = undefined;
  }

  async findAll(options: any = {}) {
    return await this.model.findAll(options);
  }

  async findOne(options: any = {}) {
    return await this.model.findOne(options);
  }

  async findByPk(id: any, options: any = {}) {
    return await this.model.findByPk(id, options);
  }

  async create(body: any) {
    return await this.model.create(body);
  }

  async update(id: any, body: any) {
    return await this.model.update(body, { where: { id }, returning: true });
  }

  async remove(id: any) {
    return await this.model.destroy({ where: { id } });
  }
}

export = Repository;
