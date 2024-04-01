"use client";

import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import React, { useState } from "react";

interface SupabaseProps {
    children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProps> = ({
    children
}) => {
    const [supabaseClient] = useState(() =>
        createClientComponentClient<Database>()
    );

    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    );
};

export default SupabaseProvider