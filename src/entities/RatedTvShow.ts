import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToOne } from "typeorm"
import { Movies } from "./Movies"
import { User } from "./User"
import { TvShows } from "./TvShow"

@Entity('rated_tvshow')
export class RatedTvShow {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    rating: number

    @Column()
    description: string

    @OneToOne(() => TvShows)
    @JoinColumn({ name: 'tvshow_id' })
    rated_tvshow: TvShows

    @OneToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    rated_user: User

}