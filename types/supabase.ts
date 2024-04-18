export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
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
      categories: {
        Row: {
          created_at: string;
          id: number;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      events: {
        Row: {
          created_at: string;
          description_en: string;
          description_ga: string;
          group_id: number;
          id: number;
          image: string | null;
          location_id: number;
          name_en: string;
          name_ga: string;
          start_date: string;
          start_time: string;
        };
        Insert: {
          created_at?: string;
          description_en: string;
          description_ga: string;
          group_id: number;
          id?: number;
          image?: string | null;
          location_id: number;
          name_en: string;
          name_ga: string;
          start_date: string;
          start_time: string;
        };
        Update: {
          created_at?: string;
          description_en?: string;
          description_ga?: string;
          group_id?: number;
          id?: number;
          image?: string | null;
          location_id?: number;
          name_en?: string;
          name_ga?: string;
          start_date?: string;
          start_time?: string;
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
      group_category: {
        Row: {
          category_id: number;
          created_at: string;
          group_id: number;
          id: number;
        };
        Insert: {
          category_id: number;
          created_at?: string;
          group_id: number;
          id?: number;
        };
        Update: {
          category_id?: number;
          created_at?: string;
          group_id?: number;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "public_group_category_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "categories";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_group_category_group_id_fkey";
            columns: ["group_id"];
            isOneToOne: false;
            referencedRelation: "groups";
            referencedColumns: ["id"];
          },
        ];
      };
      groups: {
        Row: {
          created_at: string;
          description_en: string;
          description_ga: string;
          id: number;
          image: string | null;
          location_id: number;
          name_en: string;
          name_ga: string;
          URL: string;
        };
        Insert: {
          created_at?: string;
          description_en: string;
          description_ga: string;
          id?: number;
          image?: string | null;
          location_id: number;
          name_en: string;
          name_ga: string;
          URL: string;
        };
        Update: {
          created_at?: string;
          description_en?: string;
          description_ga?: string;
          id?: number;
          image?: string | null;
          location_id?: number;
          name_en?: string;
          name_ga?: string;
          URL?: string;
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
          name_en: string;
          name_ga: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name_en: string;
          name_ga: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          name_en?: string;
          name_ga?: string;
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
      phrase_category: {
        Row: {
          category_id: number;
          created_at: string;
          id: number;
          phrase_id: number;
        };
        Insert: {
          category_id: number;
          created_at?: string;
          id?: number;
          phrase_id: number;
        };
        Update: {
          category_id?: number;
          created_at?: string;
          id?: number;
          phrase_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "public_phrase_category_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "categories";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_phrase_category_dictionary_id_fkey";
            columns: ["phrase_id"];
            isOneToOne: false;
            referencedRelation: "phrases";
            referencedColumns: ["id"];
          },
        ];
      };
      phrases: {
        Row: {
          audio_url: string | null;
          author_id: string;
          created_at: string;
          entry_en: string;
          entry_ga: string;
          group_id: number | null;
          id: number;
        };
        Insert: {
          audio_url?: string | null;
          author_id: string;
          created_at?: string;
          entry_en: string;
          entry_ga: string;
          group_id?: number | null;
          id?: number;
        };
        Update: {
          audio_url?: string | null;
          author_id?: string;
          created_at?: string;
          entry_en?: string;
          entry_ga?: string;
          group_id?: number | null;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "public_dictionary_author_id_fkey";
            columns: ["author_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_phrases_group_id_fkey";
            columns: ["group_id"];
            isOneToOne: false;
            referencedRelation: "groups";
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
      get_categories_phrases: {
        Args: {
          categories_input: number[];
        };
        Returns: {
          audio_url: string | null;
          author_id: string;
          created_at: string;
          entry_en: string;
          entry_ga: string;
          group_id: number | null;
          id: number;
        }[];
      };
      get_user_events: {
        Args: {
          user_id_input: string;
        };
        Returns: {
          created_at: string;
          description_en: string;
          description_ga: string;
          group_id: number;
          id: number;
          image: string | null;
          location_id: number;
          name_en: string;
          name_ga: string;
          start_date: string;
          start_time: string;
        }[];
      };
      get_user_groups: {
        Args: {
          user_id_input: string;
        };
        Returns: {
          created_at: string;
          description_en: string;
          description_ga: string;
          id: number;
          image: string | null;
          location_id: number;
          name_en: string;
          name_ga: string;
          URL: string;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
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
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
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
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
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
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
