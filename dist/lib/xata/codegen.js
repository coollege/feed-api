// Generated by Xata Codegen 0.23.2. Please do not edit.
import { buildClient } from "@xata.io/client";
const tables = [
    {
        name: "student",
        columns: [
            { name: "email", type: "string", unique: true },
            { name: "utec_token_v1", type: "string" },
            { name: "last_populated_at", type: "datetime" },
            { name: "last_token_stored_at", type: "datetime" },
            { name: "populating", type: "bool" },
            { name: "utec_token_v2", type: "string" },
        ],
    },
    {
        name: "course",
        columns: [
            {
                name: "name",
                type: "string",
                notNull: true,
                defaultValue: "Frontend Engineering Fundamentals",
            },
            { name: "handle", type: "string", unique: true },
        ],
    },
    {
        name: "teacher",
        columns: [
            {
                name: "first_name",
                type: "string",
                notNull: true,
                defaultValue: "Bad",
            },
            {
                name: "last_name",
                type: "string",
                notNull: true,
                defaultValue: "Bunny",
            },
        ],
    },
    {
        name: "curriculum",
        columns: [{ name: "handle", type: "string", unique: true }],
    },
    {
        name: "period",
        columns: [{ name: "handle", type: "string", unique: true }],
    },
    {
        name: "class",
        columns: [
            { name: "course", type: "link", link: { table: "course" } },
            { name: "period", type: "link", link: { table: "period" } },
            { name: "wrong_formula", type: "bool", defaultValue: "false" },
        ],
    },
    {
        name: "student_curriculum",
        columns: [
            { name: "student", type: "link", link: { table: "student" } },
            { name: "curriculum", type: "link", link: { table: "curriculum" } },
        ],
    },
    {
        name: "level",
        columns: [
            { name: "curriculum", type: "link", link: { table: "curriculum" } },
            { name: "elective_count", type: "int" },
            { name: "order", type: "int" },
        ],
    },
    {
        name: "level_course",
        columns: [
            { name: "level", type: "link", link: { table: "level" } },
            { name: "course", type: "link", link: { table: "course" } },
            { name: "credits", type: "float" },
        ],
    },
    {
        name: "classroom",
        columns: [
            { name: "teacher", type: "link", link: { table: "teacher" } },
            { name: "class", type: "link", link: { table: "class" } },
            { name: "score", type: "float" },
            { name: "section", type: "int" },
        ],
    },
    {
        name: "evaluation",
        columns: [
            { name: "class", type: "link", link: { table: "class" } },
            {
                name: "can_be_deleted",
                type: "bool",
                notNull: true,
                defaultValue: "false",
            },
            { name: "weight", type: "float" },
            { name: "label", type: "string" },
            { name: "handle", type: "string" },
        ],
    },
    {
        name: "enrollment",
        columns: [
            { name: "student", type: "link", link: { table: "student" } },
            { name: "classroom", type: "link", link: { table: "classroom" } },
            { name: "final_score", type: "float" },
            {
                name: "dropped_out",
                type: "bool",
                notNull: true,
                defaultValue: "false",
            },
            { name: "elective", type: "bool", notNull: true, defaultValue: "false" },
        ],
    },
    {
        name: "grade",
        columns: [
            { name: "enrollment", type: "link", link: { table: "enrollment" } },
            { name: "evaluation", type: "link", link: { table: "evaluation" } },
            { name: "score", type: "float" },
        ],
    },
    {
        name: "nextauth_users",
        columns: [
            { name: "email", type: "email" },
            { name: "emailVerified", type: "datetime" },
            {
                name: "links",
                type: "object",
                columns: [
                    { name: "content", type: "string" },
                    { name: "payments", type: "string" },
                ],
            },
            { name: "name", type: "string" },
            { name: "image", type: "string" },
        ],
    },
    {
        name: "nextauth_accounts",
        columns: [
            { name: "user", type: "link", link: { table: "nextauth_users" } },
            { name: "type", type: "string" },
            { name: "provider", type: "string" },
            { name: "providerAccountId", type: "string" },
            { name: "refresh_token", type: "string" },
            { name: "access_token", type: "string" },
            { name: "expires_at", type: "int" },
            { name: "token_type", type: "string" },
            { name: "scope", type: "string" },
            { name: "id_token", type: "text" },
            { name: "session_state", type: "string" },
            { name: "oauth_token", type: "string" },
            { name: "oauth_token_secret", type: "string" },
        ],
    },
    {
        name: "nextauth_verificationTokens",
        columns: [
            { name: "identifier", type: "string" },
            { name: "token", type: "string" },
            { name: "expires", type: "datetime" },
        ],
    },
    {
        name: "nextauth_users_accounts",
        columns: [
            { name: "user", type: "link", link: { table: "nextauth_users" } },
            { name: "account", type: "link", link: { table: "nextauth_accounts" } },
        ],
    },
    {
        name: "nextauth_users_sessions",
        columns: [
            { name: "user", type: "link", link: { table: "nextauth_users" } },
            { name: "session", type: "link", link: { table: "nextauth_sessions" } },
        ],
    },
    {
        name: "nextauth_sessions",
        columns: [
            { name: "sessionToken", type: "string" },
            { name: "expires", type: "datetime" },
            { name: "user", type: "link", link: { table: "nextauth_users" } },
        ],
    },
];
const DatabaseClient = buildClient();
const defaultOptions = {
    databaseURL: "https://beauty-grades-jbc8sn.us-east-1.xata.sh/db/bg4utec",
};
export class XataClient extends DatabaseClient {
    constructor(options) {
        super({ ...defaultOptions, ...options }, tables);
    }
}
let instance = undefined;
export const getXataClient = () => {
    if (instance)
        return instance;
    instance = new XataClient();
    return instance;
};