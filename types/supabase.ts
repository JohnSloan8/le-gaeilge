export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      attendees: {
        Row: {
          created_at: string;
          event_id: number;
          id: number;
          profile_id: number | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          event_id: number;
          id?: number;
          profile_id?: number | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          event_id?: number;
          id?: number;
          profile_id?: number | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "attendees_event_id_fkey";
            columns: ["event_id"];
            isOneToOne: false;
            referencedRelation: "events";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "attendees_profile_id_fkey";
            columns: ["profile_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "attendees_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      events: {
        Row: {
          created_at: string;
          description_en: string | null;
          description_ga: string | null;
          group_id: number | null;
          id: number;
          image: string | null;
          location_id: number | null;
          name_en: string | null;
          name_ga: string | null;
          start_date: string | null;
          start_time: string | null;
        };
        Insert: {
          created_at?: string;
          description_en?: string | null;
          description_ga?: string | null;
          group_id?: number | null;
          id?: number;
          image?: string | null;
          location_id?: number | null;
          name_en?: string | null;
          name_ga?: string | null;
          start_date?: string | null;
          start_time?: string | null;
        };
        Update: {
          created_at?: string;
          description_en?: string | null;
          description_ga?: string | null;
          group_id?: number | null;
          id?: number;
          image?: string | null;
          location_id?: number | null;
          name_en?: string | null;
          name_ga?: string | null;
          start_date?: string | null;
          start_time?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "events_group_id_fkey";
            columns: ["group_id"];
            isOneToOne: false;
            referencedRelation: "groups";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "events_location_id_fkey";
            columns: ["location_id"];
            isOneToOne: false;
            referencedRelation: "locations";
            referencedColumns: ["id"];
          },
        ];
      };
      groups: {
        Row: {
          created_at: string;
          description_en: string | null;
          description_ga: string | null;
          id: number;
          image: string | null;
          location_id: number | null;
          name_en: string | null;
          name_ga: string;
          URL: string | null;
        };
        Insert: {
          created_at?: string;
          description_en?: string | null;
          description_ga?: string | null;
          id?: number;
          image?: string | null;
          location_id?: number | null;
          name_en?: string | null;
          name_ga: string;
          URL?: string | null;
        };
        Update: {
          created_at?: string;
          description_en?: string | null;
          description_ga?: string | null;
          id?: number;
          image?: string | null;
          location_id?: number | null;
          name_en?: string | null;
          name_ga?: string;
          URL?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "groups_location_id_fkey";
            columns: ["location_id"];
            isOneToOne: false;
            referencedRelation: "locations";
            referencedColumns: ["id"];
          },
        ];
      };
      locations: {
        Row: {
          created_at: string;
          id: number;
          name_en: string | null;
          name_ga: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name_en?: string | null;
          name_ga?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          name_en?: string | null;
          name_ga?: string | null;
        };
        Relationships: [];
      };
      members: {
        Row: {
          created_at: string;
          group_id: number;
          id: number;
          profile_id: number | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          group_id: number;
          id?: number;
          profile_id?: number | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          group_id?: number;
          id?: number;
          profile_id?: number | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "members_group_id_fkey";
            columns: ["group_id"];
            isOneToOne: false;
            referencedRelation: "groups";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "members_profile_id_fkey";
            columns: ["profile_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "members_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      profiles: {
        Row: {
          created_at: string;
          id: number;
          image: string | null;
          irish_level: string;
          name: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          image?: string | null;
          irish_level: string;
          name: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          image?: string | null;
          irish_level?: string;
          name?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
        Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
        Database["public"]["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never;
