export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      user: {
        Row: {
          apiKey: string | null;
          created_at: string | null;
          email: string | null;
          id: number;
          plan: string | null;
          request: number | null;
        };
        Insert: {
          apiKey?: string | null;
          created_at?: string | null;
          email?: string | null;
          id?: number;
          plan?: string | null;
          request?: number | null;
        };
        Update: {
          apiKey?: string | null;
          created_at?: string | null;
          email?: string | null;
          id?: number;
          plan?: string | null;
          request?: number | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
