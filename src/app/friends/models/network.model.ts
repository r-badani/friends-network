import { User } from './user.model';
import { Link } from './link.model';

export interface Network {
  users: User[];
  links: Link[];
}
