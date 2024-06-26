export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  pgbouncer: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_auth: {
        Args: {
          p_usename: string;
        };
        Returns: {
          username: string;
          password: string;
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
  public: {
    Tables: {
      attendees: {
        Row: {
          created_at: string;
          event_id: number;
          id: number;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          event_id: number;
          id?: number;
          user_id: string;
        };
        Update: {
          created_at?: string;
          event_id?: number;
          id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "public_attendees_event_id_fkey";
            columns: ["event_id"];
            referencedRelation: "events";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_attendees_user_id_fkey";
            columns: ["user_id"];
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
            foreignKeyName: "public_events_group_id_fkey";
            columns: ["group_id"];
            referencedRelation: "groups";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_events_location_fkey";
            columns: ["location_id"];
            referencedRelation: "locations";
            referencedColumns: ["id"];
          },
        ];
      };
      favourite_phrases: {
        Row: {
          created_at: string;
          id: number;
          phrase_id: number;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          phrase_id: number;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          phrase_id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "public_favourite_phrases_phrase_id_fkey";
            columns: ["phrase_id"];
            referencedRelation: "phrases";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_favourite_phrases_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
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
          location: number | null;
          name_en: string | null;
          name_ga: string | null;
          URL: string | null;
        };
        Insert: {
          created_at?: string;
          description_en?: string | null;
          description_ga?: string | null;
          id?: number;
          image?: string | null;
          location?: number | null;
          name_en?: string | null;
          name_ga?: string | null;
          URL?: string | null;
        };
        Update: {
          created_at?: string;
          description_en?: string | null;
          description_ga?: string | null;
          id?: number;
          image?: string | null;
          location?: number | null;
          name_en?: string | null;
          name_ga?: string | null;
          URL?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_groups_location_fkey";
            columns: ["location"];
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
          user_id: string;
        };
        Insert: {
          created_at?: string;
          group_id: number;
          id?: number;
          user_id: string;
        };
        Update: {
          created_at?: string;
          group_id?: number;
          id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "public_members_group_id_fkey";
            columns: ["group_id"];
            referencedRelation: "groups";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_members_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "profiles";
            referencedColumns: ["user_id"];
          },
        ];
      };
      phrases: {
        Row: {
          audio_data: string | null;
          author_id: string | null;
          created_at: string;
          edited: boolean | null;
          entry_en: string | null;
          entry_ga: string | null;
          group_id: number | null;
          id: number;
        };
        Insert: {
          audio_data?: string | null;
          author_id?: string | null;
          created_at?: string;
          edited?: boolean | null;
          entry_en?: string | null;
          entry_ga?: string | null;
          group_id?: number | null;
          id?: number;
        };
        Update: {
          audio_data?: string | null;
          author_id?: string | null;
          created_at?: string;
          edited?: boolean | null;
          entry_en?: string | null;
          entry_ga?: string | null;
          group_id?: number | null;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "public_phrases_author_id_fkey";
            columns: ["author_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_phrases_group_id_fkey";
            columns: ["group_id"];
            referencedRelation: "groups";
            referencedColumns: ["id"];
          },
        ];
      };
      phrases_remembered: {
        Row: {
          correct: boolean | null;
          created_at: string;
          id: number;
          phrase_id: number | null;
        };
        Insert: {
          correct?: boolean | null;
          created_at?: string;
          id?: number;
          phrase_id?: number | null;
        };
        Update: {
          correct?: boolean | null;
          created_at?: string;
          id?: number;
          phrase_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_phrases_remembered_phrase_id_fkey";
            columns: ["phrase_id"];
            referencedRelation: "phrases";
            referencedColumns: ["id"];
          },
        ];
      };
      profiles: {
        Row: {
          created_at: string;
          id: number;
          image: string | null;
          irish_level: string | null;
          name: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          image?: string | null;
          irish_level?: string | null;
          name?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          image?: string | null;
          irish_level?: string | null;
          name?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "public_profiles_user_id_fkey";
            columns: ["user_id"];
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
      get_phrases_for_group_by_group_id_with_favourite: {
        Args: {
          group_id_input?: number;
          user_id_input?: string;
        };
        Returns: {
          p_id: number;
          p_created_at: string;
          p_entry_ga: string;
          p_entry_en: string;
          p_author_id: string;
          p_group_id: number;
          p_audio_data: string;
          p_edited: boolean;
          p_is_favourited: boolean;
        }[];
      };
      get_phrases_for_test: {
        Args: {
          user_id_input: string;
          group_id_input: number;
        };
        Returns: {
          p_id: number;
          p_created_at: string;
          p_entry_ga: string;
          p_entry_en: string;
          p_author_id: string;
          p_group_id: number;
          p_audio_data: string;
          p_edited: boolean;
          p_is_favourited: boolean;
          p_correct_true_count: number;
          p_correct_false_count: number;
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
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null;
          avif_autodetection: boolean | null;
          created_at: string | null;
          file_size_limit: number | null;
          id: string;
          name: string;
          owner: string | null;
          owner_id: string | null;
          public: boolean | null;
          updated_at: string | null;
        };
        Insert: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id: string;
          name: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Update: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id?: string;
          name?: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      migrations: {
        Row: {
          executed_at: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Insert: {
          executed_at?: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Update: {
          executed_at?: string | null;
          hash?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      objects: {
        Row: {
          bucket_id: string | null;
          created_at: string | null;
          id: string;
          last_accessed_at: string | null;
          metadata: Json | null;
          name: string | null;
          owner: string | null;
          owner_id: string | null;
          path_tokens: string[] | null;
          updated_at: string | null;
          version: string | null;
        };
        Insert: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Update: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey";
            columns: ["bucket_id"];
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
        ];
      };
      s3_multipart_uploads: {
        Row: {
          bucket_id: string;
          created_at: string;
          id: string;
          in_progress_size: number;
          key: string;
          owner_id: string | null;
          upload_signature: string;
          version: string;
        };
        Insert: {
          bucket_id: string;
          created_at?: string;
          id: string;
          in_progress_size?: number;
          key: string;
          owner_id?: string | null;
          upload_signature: string;
          version: string;
        };
        Update: {
          bucket_id?: string;
          created_at?: string;
          id?: string;
          in_progress_size?: number;
          key?: string;
          owner_id?: string | null;
          upload_signature?: string;
          version?: string;
        };
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_bucket_id_fkey";
            columns: ["bucket_id"];
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
        ];
      };
      s3_multipart_uploads_parts: {
        Row: {
          bucket_id: string;
          created_at: string;
          etag: string;
          id: string;
          key: string;
          owner_id: string | null;
          part_number: number;
          size: number;
          upload_id: string;
          version: string;
        };
        Insert: {
          bucket_id: string;
          created_at?: string;
          etag: string;
          id?: string;
          key: string;
          owner_id?: string | null;
          part_number: number;
          size?: number;
          upload_id: string;
          version: string;
        };
        Update: {
          bucket_id?: string;
          created_at?: string;
          etag?: string;
          id?: string;
          key?: string;
          owner_id?: string | null;
          part_number?: number;
          size?: number;
          upload_id?: string;
          version?: string;
        };
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_parts_bucket_id_fkey";
            columns: ["bucket_id"];
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "s3_multipart_uploads_parts_upload_id_fkey";
            columns: ["upload_id"];
            referencedRelation: "s3_multipart_uploads";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string;
          name: string;
          owner: string;
          metadata: Json;
        };
        Returns: undefined;
      };
      extension: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      filename: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      foldername: {
        Args: {
          name: string;
        };
        Returns: string[];
      };
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>;
        Returns: {
          size: number;
          bucket_id: string;
        }[];
      };
      list_multipart_uploads_with_delimiter: {
        Args: {
          bucket_id: string;
          prefix_param: string;
          delimiter_param: string;
          max_keys?: number;
          next_key_token?: string;
          next_upload_token?: string;
        };
        Returns: {
          key: string;
          id: string;
          created_at: string;
        }[];
      };
      list_objects_with_delimiter: {
        Args: {
          bucket_id: string;
          prefix_param: string;
          delimiter_param: string;
          max_keys?: number;
          start_after?: string;
          next_token?: string;
        };
        Returns: {
          name: string;
          id: string;
          metadata: Json;
          updated_at: string;
        }[];
      };
      search: {
        Args: {
          prefix: string;
          bucketname: string;
          limits?: number;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
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
