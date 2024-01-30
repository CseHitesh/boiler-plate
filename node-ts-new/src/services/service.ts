class Service {
  repository: any;
  model: string;

  constructor(repository: any) {
    this.repository = repository;
    this.model = "Modelo";
  }

  async create(body: any) {
    const data = await this.repository.create(body);

    if (!data) {
      throw new Error("Not created");
    }

    return data;
  }

  async findAll(options: any = {}) {
    const data = await this.repository.findAll(options);

    if (!data) {
      throw new Error("Internal server error");
    }

    return data;
  }

  async findOne(options: any) {
    const data = await this.repository.findOne(options);

    if (!data) {
      throw new Error("Not found");
    }

    return data;
  }

  async findByPk(id: any) {
    const data = await this.repository.findByPk(id);

    if (!data) {
      throw new Error("Not found");
    }

    return data;
  }

  async update(id: any, body: any) {
    const data = await this.repository.findByPk(id);

    if (!data) {
      throw new Error("Not found");
    }

    const payload = {
      ...data.dataValues,
      ...body,
    };

    await this.repository.update(id, payload);

    return payload;
  }

  async remove(id: any) {
    const data = await this.repository.findByPk(id);

    if (!data) {
      throw new Error("Not found");
    }

    await this.repository.remove(id);

    return null;
  }
}

export = Service;
