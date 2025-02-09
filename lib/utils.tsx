import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import db from "./db"
import { users } from "./db/schema"
import { eq } from "drizzle-orm"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}
export function getUsers(){
    return db.select().from(users).all()
}
export function getUserFromId(id:number){
    return db.select().from(users).where(eq(users.id,id)).all()[0]
}
export function getUserFromEmail(email:string){
    return db.select().from(users).where(eq(users.email,email)).all()[0]
}
export function getUserFromUsername(username:string){
    return db.select().from(users).where(eq(users.username,username)).all()[0]
}
export function createUser(email:string,password:string,name:string,username:string){
    return db.insert(users).values({email,password,name,username}).run()
}
export function deleteUser(id:number){
    return db.delete(users).where(eq(users.id,id)).run()
}
export function updateUser(id:number,email:string,password:string){
    return db.update(users).set({email,password}).where(eq(users.id,id)).run()
}