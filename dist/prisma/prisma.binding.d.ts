import { GraphQLResolveInfo, GraphQLSchema } from 'graphql';
import { IResolvers } from 'graphql-tools/dist/Interfaces';
import { Options } from 'graphql-binding';
import { BasePrismaOptions } from 'prisma-binding';
export interface Query {
    users: <T = Array<User | null>>(args: {
        where?: UserWhereInput | null;
        orderBy?: UserOrderByInput | null;
        skip?: Int | null;
        after?: String | null;
        before?: String | null;
        first?: Int | null;
        last?: Int | null;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T>;
    posts: <T = Array<Post | null>>(args: {
        where?: PostWhereInput | null;
        orderBy?: PostOrderByInput | null;
        skip?: Int | null;
        after?: String | null;
        before?: String | null;
        first?: Int | null;
        last?: Int | null;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T>;
    user: <T = User | null>(args: {
        where: UserWhereUniqueInput;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null>;
    post: <T = Post | null>(args: {
        where: PostWhereUniqueInput;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null>;
    usersConnection: <T = UserConnection>(args: {
        where?: UserWhereInput | null;
        orderBy?: UserOrderByInput | null;
        skip?: Int | null;
        after?: String | null;
        before?: String | null;
        first?: Int | null;
        last?: Int | null;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T>;
    postsConnection: <T = PostConnection>(args: {
        where?: PostWhereInput | null;
        orderBy?: PostOrderByInput | null;
        skip?: Int | null;
        after?: String | null;
        before?: String | null;
        first?: Int | null;
        last?: Int | null;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T>;
    node: <T = Node | null>(args: {
        id: ID_Output;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null>;
}
export interface Mutation {
    createUser: <T = User>(args: {
        data: UserCreateInput;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T>;
    createPost: <T = Post>(args: {
        data: PostCreateInput;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T>;
    updateUser: <T = User | null>(args: {
        data: UserUpdateInput;
        where: UserWhereUniqueInput;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null>;
    updatePost: <T = Post | null>(args: {
        data: PostUpdateInput;
        where: PostWhereUniqueInput;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null>;
    deleteUser: <T = User | null>(args: {
        where: UserWhereUniqueInput;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null>;
    deletePost: <T = Post | null>(args: {
        where: PostWhereUniqueInput;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null>;
    upsertUser: <T = User>(args: {
        where: UserWhereUniqueInput;
        create: UserCreateInput;
        update: UserUpdateInput;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T>;
    upsertPost: <T = Post>(args: {
        where: PostWhereUniqueInput;
        create: PostCreateInput;
        update: PostUpdateInput;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T>;
    updateManyUsers: <T = BatchPayload>(args: {
        data: UserUpdateManyMutationInput;
        where?: UserWhereInput | null;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T>;
    updateManyPosts: <T = BatchPayload>(args: {
        data: PostUpdateManyMutationInput;
        where?: PostWhereInput | null;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T>;
    deleteManyUsers: <T = BatchPayload>(args: {
        where?: UserWhereInput | null;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T>;
    deleteManyPosts: <T = BatchPayload>(args: {
        where?: PostWhereInput | null;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T>;
    executeRaw: <T = Json>(args: {
        database?: PrismaDatabase | null;
        query: String;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T>;
}
export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: {
        where?: UserSubscriptionWhereInput | null;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>>;
    post: <T = PostSubscriptionPayload | null>(args: {
        where?: PostSubscriptionWhereInput | null;
    }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>>;
}
export interface Exists {
    User: (where?: UserWhereInput) => Promise<boolean>;
    Post: (where?: PostWhereInput) => Promise<boolean>;
}
export interface Prisma {
    query: Query;
    mutation: Mutation;
    subscription: Subscription;
    exists: Exists;
    request: <T = any>(query: string, variables?: {
        [key: string]: any;
    }) => Promise<T>;
    delegate(operation: 'query' | 'mutation', fieldName: string, args: {
        [key: string]: any;
    }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
    delegateSubscription(fieldName: string, args?: {
        [key: string]: any;
    }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
    getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}
export interface BindingConstructor<T> {
    new (options: BasePrismaOptions): T;
}
export declare const Prisma: BindingConstructor<Prisma>;
export declare type MutationType = 'CREATED' | 'UPDATED' | 'DELETED';
export declare type PostOrderByInput = 'id_ASC' | 'id_DESC' | 'title_ASC' | 'title_DESC' | 'body_ASC' | 'body_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC';
export declare type PrismaDatabase = 'default';
export declare type UserOrderByInput = 'id_ASC' | 'id_DESC' | 'email_ASC' | 'email_DESC' | 'password_ASC' | 'password_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC';
export interface PostCreateInput {
    id?: ID_Input | null;
    title: String;
    body?: String | null;
    author: UserCreateOneWithoutPostInput;
}
export interface PostCreateManyWithoutAuthorInput {
    create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput | null;
    connect?: PostWhereUniqueInput[] | PostWhereUniqueInput | null;
}
export interface PostCreateWithoutAuthorInput {
    id?: ID_Input | null;
    title: String;
    body?: String | null;
}
export interface PostScalarWhereInput {
    AND?: PostScalarWhereInput[] | PostScalarWhereInput | null;
    OR?: PostScalarWhereInput[] | PostScalarWhereInput | null;
    NOT?: PostScalarWhereInput[] | PostScalarWhereInput | null;
    id?: ID_Input | null;
    id_not?: ID_Input | null;
    id_in?: ID_Output[] | ID_Output | null;
    id_not_in?: ID_Output[] | ID_Output | null;
    id_lt?: ID_Input | null;
    id_lte?: ID_Input | null;
    id_gt?: ID_Input | null;
    id_gte?: ID_Input | null;
    id_contains?: ID_Input | null;
    id_not_contains?: ID_Input | null;
    id_starts_with?: ID_Input | null;
    id_not_starts_with?: ID_Input | null;
    id_ends_with?: ID_Input | null;
    id_not_ends_with?: ID_Input | null;
    title?: String | null;
    title_not?: String | null;
    title_in?: String[] | String | null;
    title_not_in?: String[] | String | null;
    title_lt?: String | null;
    title_lte?: String | null;
    title_gt?: String | null;
    title_gte?: String | null;
    title_contains?: String | null;
    title_not_contains?: String | null;
    title_starts_with?: String | null;
    title_not_starts_with?: String | null;
    title_ends_with?: String | null;
    title_not_ends_with?: String | null;
    body?: String | null;
    body_not?: String | null;
    body_in?: String[] | String | null;
    body_not_in?: String[] | String | null;
    body_lt?: String | null;
    body_lte?: String | null;
    body_gt?: String | null;
    body_gte?: String | null;
    body_contains?: String | null;
    body_not_contains?: String | null;
    body_starts_with?: String | null;
    body_not_starts_with?: String | null;
    body_ends_with?: String | null;
    body_not_ends_with?: String | null;
    createdAt?: DateTime | null;
    createdAt_not?: DateTime | null;
    createdAt_in?: DateTime[] | DateTime | null;
    createdAt_not_in?: DateTime[] | DateTime | null;
    createdAt_lt?: DateTime | null;
    createdAt_lte?: DateTime | null;
    createdAt_gt?: DateTime | null;
    createdAt_gte?: DateTime | null;
    updatedAt?: DateTime | null;
    updatedAt_not?: DateTime | null;
    updatedAt_in?: DateTime[] | DateTime | null;
    updatedAt_not_in?: DateTime[] | DateTime | null;
    updatedAt_lt?: DateTime | null;
    updatedAt_lte?: DateTime | null;
    updatedAt_gt?: DateTime | null;
    updatedAt_gte?: DateTime | null;
}
export interface PostSubscriptionWhereInput {
    AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput | null;
    OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput | null;
    NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput | null;
    mutation_in?: MutationType[] | MutationType | null;
    updatedFields_contains?: String | null;
    updatedFields_contains_every?: String[] | String | null;
    updatedFields_contains_some?: String[] | String | null;
    node?: PostWhereInput | null;
}
export interface PostUpdateInput {
    title?: String | null;
    body?: String | null;
    author?: UserUpdateOneRequiredWithoutPostInput | null;
}
export interface PostUpdateManyDataInput {
    title?: String | null;
    body?: String | null;
}
export interface PostUpdateManyMutationInput {
    title?: String | null;
    body?: String | null;
}
export interface PostUpdateManyWithoutAuthorInput {
    create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput | null;
    connect?: PostWhereUniqueInput[] | PostWhereUniqueInput | null;
    set?: PostWhereUniqueInput[] | PostWhereUniqueInput | null;
    disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput | null;
    delete?: PostWhereUniqueInput[] | PostWhereUniqueInput | null;
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | PostUpdateWithWhereUniqueWithoutAuthorInput | null;
    updateMany?: PostUpdateManyWithWhereNestedInput[] | PostUpdateManyWithWhereNestedInput | null;
    deleteMany?: PostScalarWhereInput[] | PostScalarWhereInput | null;
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | PostUpsertWithWhereUniqueWithoutAuthorInput | null;
}
export interface PostUpdateManyWithWhereNestedInput {
    where: PostScalarWhereInput;
    data: PostUpdateManyDataInput;
}
export interface PostUpdateWithoutAuthorDataInput {
    title?: String | null;
    body?: String | null;
}
export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput;
    data: PostUpdateWithoutAuthorDataInput;
}
export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput;
    update: PostUpdateWithoutAuthorDataInput;
    create: PostCreateWithoutAuthorInput;
}
export interface PostWhereInput {
    AND?: PostWhereInput[] | PostWhereInput | null;
    OR?: PostWhereInput[] | PostWhereInput | null;
    NOT?: PostWhereInput[] | PostWhereInput | null;
    id?: ID_Input | null;
    id_not?: ID_Input | null;
    id_in?: ID_Output[] | ID_Output | null;
    id_not_in?: ID_Output[] | ID_Output | null;
    id_lt?: ID_Input | null;
    id_lte?: ID_Input | null;
    id_gt?: ID_Input | null;
    id_gte?: ID_Input | null;
    id_contains?: ID_Input | null;
    id_not_contains?: ID_Input | null;
    id_starts_with?: ID_Input | null;
    id_not_starts_with?: ID_Input | null;
    id_ends_with?: ID_Input | null;
    id_not_ends_with?: ID_Input | null;
    title?: String | null;
    title_not?: String | null;
    title_in?: String[] | String | null;
    title_not_in?: String[] | String | null;
    title_lt?: String | null;
    title_lte?: String | null;
    title_gt?: String | null;
    title_gte?: String | null;
    title_contains?: String | null;
    title_not_contains?: String | null;
    title_starts_with?: String | null;
    title_not_starts_with?: String | null;
    title_ends_with?: String | null;
    title_not_ends_with?: String | null;
    body?: String | null;
    body_not?: String | null;
    body_in?: String[] | String | null;
    body_not_in?: String[] | String | null;
    body_lt?: String | null;
    body_lte?: String | null;
    body_gt?: String | null;
    body_gte?: String | null;
    body_contains?: String | null;
    body_not_contains?: String | null;
    body_starts_with?: String | null;
    body_not_starts_with?: String | null;
    body_ends_with?: String | null;
    body_not_ends_with?: String | null;
    createdAt?: DateTime | null;
    createdAt_not?: DateTime | null;
    createdAt_in?: DateTime[] | DateTime | null;
    createdAt_not_in?: DateTime[] | DateTime | null;
    createdAt_lt?: DateTime | null;
    createdAt_lte?: DateTime | null;
    createdAt_gt?: DateTime | null;
    createdAt_gte?: DateTime | null;
    updatedAt?: DateTime | null;
    updatedAt_not?: DateTime | null;
    updatedAt_in?: DateTime[] | DateTime | null;
    updatedAt_not_in?: DateTime[] | DateTime | null;
    updatedAt_lt?: DateTime | null;
    updatedAt_lte?: DateTime | null;
    updatedAt_gt?: DateTime | null;
    updatedAt_gte?: DateTime | null;
    author?: UserWhereInput | null;
}
export interface PostWhereUniqueInput {
    id?: ID_Input | null;
}
export interface UserCreateInput {
    id?: ID_Input | null;
    email: String;
    password: String;
    post?: PostCreateManyWithoutAuthorInput | null;
}
export interface UserCreateOneWithoutPostInput {
    create?: UserCreateWithoutPostInput | null;
    connect?: UserWhereUniqueInput | null;
}
export interface UserCreateWithoutPostInput {
    id?: ID_Input | null;
    email: String;
    password: String;
}
export interface UserSubscriptionWhereInput {
    AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null;
    OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null;
    NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null;
    mutation_in?: MutationType[] | MutationType | null;
    updatedFields_contains?: String | null;
    updatedFields_contains_every?: String[] | String | null;
    updatedFields_contains_some?: String[] | String | null;
    node?: UserWhereInput | null;
}
export interface UserUpdateInput {
    email?: String | null;
    password?: String | null;
    post?: PostUpdateManyWithoutAuthorInput | null;
}
export interface UserUpdateManyMutationInput {
    email?: String | null;
    password?: String | null;
}
export interface UserUpdateOneRequiredWithoutPostInput {
    create?: UserCreateWithoutPostInput | null;
    connect?: UserWhereUniqueInput | null;
    update?: UserUpdateWithoutPostDataInput | null;
    upsert?: UserUpsertWithoutPostInput | null;
}
export interface UserUpdateWithoutPostDataInput {
    email?: String | null;
    password?: String | null;
}
export interface UserUpsertWithoutPostInput {
    update: UserUpdateWithoutPostDataInput;
    create: UserCreateWithoutPostInput;
}
export interface UserWhereInput {
    AND?: UserWhereInput[] | UserWhereInput | null;
    OR?: UserWhereInput[] | UserWhereInput | null;
    NOT?: UserWhereInput[] | UserWhereInput | null;
    id?: ID_Input | null;
    id_not?: ID_Input | null;
    id_in?: ID_Output[] | ID_Output | null;
    id_not_in?: ID_Output[] | ID_Output | null;
    id_lt?: ID_Input | null;
    id_lte?: ID_Input | null;
    id_gt?: ID_Input | null;
    id_gte?: ID_Input | null;
    id_contains?: ID_Input | null;
    id_not_contains?: ID_Input | null;
    id_starts_with?: ID_Input | null;
    id_not_starts_with?: ID_Input | null;
    id_ends_with?: ID_Input | null;
    id_not_ends_with?: ID_Input | null;
    email?: String | null;
    email_not?: String | null;
    email_in?: String[] | String | null;
    email_not_in?: String[] | String | null;
    email_lt?: String | null;
    email_lte?: String | null;
    email_gt?: String | null;
    email_gte?: String | null;
    email_contains?: String | null;
    email_not_contains?: String | null;
    email_starts_with?: String | null;
    email_not_starts_with?: String | null;
    email_ends_with?: String | null;
    email_not_ends_with?: String | null;
    password?: String | null;
    password_not?: String | null;
    password_in?: String[] | String | null;
    password_not_in?: String[] | String | null;
    password_lt?: String | null;
    password_lte?: String | null;
    password_gt?: String | null;
    password_gte?: String | null;
    password_contains?: String | null;
    password_not_contains?: String | null;
    password_starts_with?: String | null;
    password_not_starts_with?: String | null;
    password_ends_with?: String | null;
    password_not_ends_with?: String | null;
    createdAt?: DateTime | null;
    createdAt_not?: DateTime | null;
    createdAt_in?: DateTime[] | DateTime | null;
    createdAt_not_in?: DateTime[] | DateTime | null;
    createdAt_lt?: DateTime | null;
    createdAt_lte?: DateTime | null;
    createdAt_gt?: DateTime | null;
    createdAt_gte?: DateTime | null;
    updatedAt?: DateTime | null;
    updatedAt_not?: DateTime | null;
    updatedAt_in?: DateTime[] | DateTime | null;
    updatedAt_not_in?: DateTime[] | DateTime | null;
    updatedAt_lt?: DateTime | null;
    updatedAt_lte?: DateTime | null;
    updatedAt_gt?: DateTime | null;
    updatedAt_gte?: DateTime | null;
    post_every?: PostWhereInput | null;
    post_some?: PostWhereInput | null;
    post_none?: PostWhereInput | null;
}
export interface UserWhereUniqueInput {
    id?: ID_Input | null;
    email?: String | null;
}
export interface Node {
    id: ID_Output;
}
export interface AggregatePost {
    count: Int;
}
export interface AggregateUser {
    count: Int;
}
export interface BatchPayload {
    count: Long;
}
export interface PageInfo {
    hasNextPage: Boolean;
    hasPreviousPage: Boolean;
    startCursor?: String | null;
    endCursor?: String | null;
}
export interface Post extends Node {
    id: ID_Output;
    title: String;
    body?: String | null;
    author: User;
    createdAt: DateTime;
    updatedAt: DateTime;
}
export interface PostConnection {
    pageInfo: PageInfo;
    edges: Array<PostEdge | null>;
    aggregate: AggregatePost;
}
export interface PostEdge {
    node: Post;
    cursor: String;
}
export interface PostPreviousValues {
    id: ID_Output;
    title: String;
    body?: String | null;
    createdAt: DateTime;
    updatedAt: DateTime;
}
export interface PostSubscriptionPayload {
    mutation: MutationType;
    node?: Post | null;
    updatedFields?: Array<String> | null;
    previousValues?: PostPreviousValues | null;
}
export interface User extends Node {
    id: ID_Output;
    email: String;
    password: String;
    post?: Array<Post> | null;
    createdAt: DateTime;
    updatedAt: DateTime;
}
export interface UserConnection {
    pageInfo: PageInfo;
    edges: Array<UserEdge | null>;
    aggregate: AggregateUser;
}
export interface UserEdge {
    node: User;
    cursor: String;
}
export interface UserPreviousValues {
    id: ID_Output;
    email: String;
    password: String;
    createdAt: DateTime;
    updatedAt: DateTime;
}
export interface UserSubscriptionPayload {
    mutation: MutationType;
    node?: User | null;
    updatedFields?: Array<String> | null;
    previousValues?: UserPreviousValues | null;
}
export declare type Boolean = boolean;
export declare type DateTime = Date | string;
export declare type ID_Input = string | number;
export declare type ID_Output = string;
export declare type Int = number;
export declare type Json = any;
export declare type Long = string;
export declare type String = string;
