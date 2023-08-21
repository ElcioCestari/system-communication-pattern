export interface BaseMapper<E, T> {
  toEntity(dto: T): E;
  toCreateDTO(entity: E): T;
}
