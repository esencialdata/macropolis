export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          user_id: string;
          full_name: string | null;
          phone: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          full_name?: string | null;
          phone?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          full_name?: string | null;
          phone?: string | null;
        };
      };
      pets: {
        Row: {
          id: string;
          owner_id: string;
          name: string;
          species: string;
          breed: string | null;
          birthdate: string | null;
          weight_kg: number | null;
          temperament: string | null;
          allergies: string[] | null;
          medical_notes: string | null;
          tag_status: "pending" | "active" | "lost" | "replaced";
          public_slug: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          owner_id: string;
          name: string;
          species: string;
          breed?: string | null;
          birthdate?: string | null;
          weight_kg?: number | null;
          temperament?: string | null;
          allergies?: string[] | null;
          medical_notes?: string | null;
          tag_status?: "pending" | "active" | "lost" | "replaced";
          public_slug: string;
        };
        Update: Partial<Database["public"]["Tables"]["pets"]["Insert"]>;
      };
      emergency_contacts: {
        Row: {
          id: string;
          pet_id: string;
          label: string;
          phone: string;
          email: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          pet_id: string;
          label: string;
          phone: string;
          email?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["emergency_contacts"]["Insert"]>;
      };
      loyalty_accounts: {
        Row: {
          id: string;
          business_id: string;
          pet_id: string;
          balance: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          business_id: string;
          pet_id: string;
          balance?: number;
        };
        Update: {
          id?: string;
          business_id?: string;
          pet_id?: string;
          balance?: number;
        };
      };
      loyalty_transactions: {
        Row: {
          id: string;
          account_id: string;
          type: "earn" | "redeem";
          amount: number;
          metadata: Json | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          account_id: string;
          type: "earn" | "redeem";
          amount: number;
          metadata?: Json | null;
        };
        Update: Partial<Database["public"]["Tables"]["loyalty_transactions"]["Insert"]>;
      };
      businesses: {
        Row: {
          id: string;
          owner_id: string;
          name: string;
          slug: string;
          city: string | null;
          contact_email: string | null;
          contact_phone: string | null;
          status: "pending" | "active" | "suspended";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          owner_id: string;
          name: string;
          slug: string;
          city?: string | null;
          contact_email?: string | null;
          contact_phone?: string | null;
          status?: "pending" | "active" | "suspended";
        };
        Update: Partial<Database["public"]["Tables"]["businesses"]["Insert"]>;
      };
      public_views: {
        Row: {
          id: string;
          pet_id: string;
          rescuer_contact: string | null;
          rescuer_message: string | null;
          location_lat: number | null;
          location_lng: number | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          pet_id: string;
          rescuer_contact?: string | null;
          rescuer_message?: string | null;
          location_lat?: number | null;
          location_lng?: number | null;
        };
        Update: never;
      };
    };
    Views: {};
    Functions: {};
    Enums: {
      tag_status: "pending" | "active" | "lost" | "replaced";
    };
  };
}
