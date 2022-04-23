import { container } from "tsyringe";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUserRepository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsReposiry } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";

// ICategoriesRepository

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsReposiry",
  SpecificationsReposiry
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
