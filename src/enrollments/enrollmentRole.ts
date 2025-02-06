export type EnrollmentRole = string & { readonly __brand: unique symbol };

export function createEnrollmentRole(role: string): EnrollmentRole {
    return role as EnrollmentRole;
}

