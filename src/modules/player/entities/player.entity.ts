import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('players')
export class PlayerEntity {
  @PrimaryColumn()
  id: string

  @Column({
    name: 'first_name',
    type: 'varchar',
    length: 32,
    unique: true,
  })
  firstName: string

  @Column({
    name: 'last_name',
    type: 'varchar',
    length: 32,
  })
  lastName: string

  @Column({
    name: 'phone_number',
    type: 'varchar',
    length: 15,
    unique: true,
  })
  phoneNumber: string

  @Column({ name: 'is_active', default: true })
  isActive: boolean
}
