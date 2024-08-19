export interface Credits {
    cast: [
        {
            id: number;
            name: string;
            profile_path: string;
            character: string;
        }
    ];

    crew: [
        {
            id: number;
            name: string;
            known_for_department: string;
            department: string;
            job: string;
        }
    ];
}
