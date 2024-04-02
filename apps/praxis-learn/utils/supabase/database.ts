export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      _TagToTicket: {
        Row: {
          A: string
          B: string
        }
        Insert: {
          A: string
          B: string
        }
        Update: {
          A?: string
          B?: string
        }
        Relationships: []
      }
      Action: {
        Row: {
          automationId: string
          createdAt: string
          id: string
          laneId: string
          name: string
          order: number
          type: Database["public"]["Enums"]["ActionType"]
          updatedAt: string
        }
        Insert: {
          automationId: string
          createdAt?: string
          id: string
          laneId?: string
          name: string
          order: number
          type: Database["public"]["Enums"]["ActionType"]
          updatedAt: string
        }
        Update: {
          automationId?: string
          createdAt?: string
          id?: string
          laneId?: string
          name?: string
          order?: number
          type?: Database["public"]["Enums"]["ActionType"]
          updatedAt?: string
        }
        Relationships: []
      }
      AddOns: {
        Row: {
          active: boolean
          agencyId: string | null
          createdAt: string
          id: string
          name: string
          priceId: string
          updatedAt: string
        }
        Insert: {
          active?: boolean
          agencyId?: string | null
          createdAt?: string
          id: string
          name: string
          priceId: string
          updatedAt: string
        }
        Update: {
          active?: boolean
          agencyId?: string | null
          createdAt?: string
          id?: string
          name?: string
          priceId?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Agency: {
        Row: {
          address: string
          agencyLogo: string
          city: string
          companyEmail: string
          companyPhone: string
          connectAccountId: string | null
          country: string
          createdAt: string
          customerId: string
          goal: number
          id: string
          name: string
          state: string
          updatedAt: string
          whiteLabel: boolean
          zipCode: string
        }
        Insert: {
          address: string
          agencyLogo: string
          city: string
          companyEmail: string
          companyPhone: string
          connectAccountId?: string | null
          country: string
          createdAt?: string
          customerId?: string
          goal?: number
          id: string
          name: string
          state: string
          updatedAt: string
          whiteLabel?: boolean
          zipCode: string
        }
        Update: {
          address?: string
          agencyLogo?: string
          city?: string
          companyEmail?: string
          companyPhone?: string
          connectAccountId?: string | null
          country?: string
          createdAt?: string
          customerId?: string
          goal?: number
          id?: string
          name?: string
          state?: string
          updatedAt?: string
          whiteLabel?: boolean
          zipCode?: string
        }
        Relationships: []
      }
      AgencySidebarOption: {
        Row: {
          agencyId: string
          createdAt: string
          icon: Database["public"]["Enums"]["Icon"]
          id: string
          link: string
          name: string
          updatedAt: string
        }
        Insert: {
          agencyId: string
          createdAt?: string
          icon?: Database["public"]["Enums"]["Icon"]
          id: string
          link?: string
          name?: string
          updatedAt: string
        }
        Update: {
          agencyId?: string
          createdAt?: string
          icon?: Database["public"]["Enums"]["Icon"]
          id?: string
          link?: string
          name?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Assistant: {
        Row: {
          assistantId: string
          id: string
        }
        Insert: {
          assistantId: string
          id: string
        }
        Update: {
          assistantId?: string
          id?: string
        }
        Relationships: []
      }
      AuditLog: {
        Row: {
          action: Database["public"]["Enums"]["ACTION"]
          createdAt: string
          entityId: string
          entityTitle: string
          entityType: Database["public"]["Enums"]["ENTITY_TYPE"]
          id: string
          orgId: string
          updatedAt: string
          userId: string
          userImage: string
          userName: string
        }
        Insert: {
          action: Database["public"]["Enums"]["ACTION"]
          createdAt?: string
          entityId: string
          entityTitle: string
          entityType: Database["public"]["Enums"]["ENTITY_TYPE"]
          id: string
          orgId: string
          updatedAt: string
          userId: string
          userImage: string
          userName: string
        }
        Update: {
          action?: Database["public"]["Enums"]["ACTION"]
          createdAt?: string
          entityId?: string
          entityTitle?: string
          entityType?: Database["public"]["Enums"]["ENTITY_TYPE"]
          id?: string
          orgId?: string
          updatedAt?: string
          userId?: string
          userImage?: string
          userName?: string
        }
        Relationships: []
      }
      Automation: {
        Row: {
          createdAt: string
          id: string
          name: string
          published: boolean
          subAccountId: string
          triggerId: string | null
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id: string
          name: string
          published?: boolean
          subAccountId: string
          triggerId?: string | null
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: string
          name?: string
          published?: boolean
          subAccountId?: string
          triggerId?: string | null
          updatedAt?: string
        }
        Relationships: []
      }
      AutomationInstance: {
        Row: {
          active: boolean
          automationId: string
          createdAt: string
          id: string
          updatedAt: string
        }
        Insert: {
          active?: boolean
          automationId: string
          createdAt?: string
          id: string
          updatedAt: string
        }
        Update: {
          active?: boolean
          automationId?: string
          createdAt?: string
          id?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Board: {
        Row: {
          createdAt: string
          id: string
          imageFullUrl: string
          imageId: string
          imageLinkHTML: string
          imageThumbUrl: string
          imageUserName: string
          orgId: string
          title: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id: string
          imageFullUrl: string
          imageId: string
          imageLinkHTML: string
          imageThumbUrl: string
          imageUserName: string
          orgId: string
          title: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: string
          imageFullUrl?: string
          imageId?: string
          imageLinkHTML?: string
          imageThumbUrl?: string
          imageUserName?: string
          orgId?: string
          title?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Canvas: {
        Row: {
          createdAt: string
          description: string | null
          id: string
          name: string
          subAccountId: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          description?: string | null
          id: string
          name: string
          subAccountId: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          description?: string | null
          id?: string
          name?: string
          subAccountId?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Card: {
        Row: {
          createdAt: string
          description: string | null
          id: string
          listId: string
          order: number
          title: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          description?: string | null
          id: string
          listId: string
          order: number
          title: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          description?: string | null
          id?: string
          listId?: string
          order?: number
          title?: string
          updatedAt?: string
        }
        Relationships: []
      }
      ClassName: {
        Row: {
          color: string
          createdAt: string
          customData: string | null
          funnelId: string
          id: string
          name: string
          updatedAt: string
        }
        Insert: {
          color: string
          createdAt?: string
          customData?: string | null
          funnelId: string
          id: string
          name: string
          updatedAt: string
        }
        Update: {
          color?: string
          createdAt?: string
          customData?: string | null
          funnelId?: string
          id?: string
          name?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Contact: {
        Row: {
          createdAt: string
          email: string
          id: string
          name: string
          subAccountId: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          email: string
          id: string
          name: string
          subAccountId: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          email?: string
          id?: string
          name?: string
          subAccountId?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Funnel: {
        Row: {
          createdAt: string
          description: string | null
          favicon: string | null
          id: string
          liveProducts: string | null
          name: string
          published: boolean
          subAccountId: string
          subDomainName: string | null
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          description?: string | null
          favicon?: string | null
          id: string
          liveProducts?: string | null
          name: string
          published?: boolean
          subAccountId: string
          subDomainName?: string | null
          updatedAt: string
        }
        Update: {
          createdAt?: string
          description?: string | null
          favicon?: string | null
          id?: string
          liveProducts?: string | null
          name?: string
          published?: boolean
          subAccountId?: string
          subDomainName?: string | null
          updatedAt?: string
        }
        Relationships: []
      }
      FunnelPage: {
        Row: {
          content: string | null
          createdAt: string
          funnelId: string
          id: string
          name: string
          order: number
          pathName: string
          previewImage: string | null
          updatedAt: string
          visits: number
        }
        Insert: {
          content?: string | null
          createdAt?: string
          funnelId: string
          id: string
          name: string
          order: number
          pathName?: string
          previewImage?: string | null
          updatedAt: string
          visits?: number
        }
        Update: {
          content?: string | null
          createdAt?: string
          funnelId?: string
          id?: string
          name?: string
          order?: number
          pathName?: string
          previewImage?: string | null
          updatedAt?: string
          visits?: number
        }
        Relationships: []
      }
      images: {
        Row: {
          aspectRatio: string | null
          authorId: string
          color: string | null
          config: Json | null
          createdAt: string
          height: number | null
          id: string
          prompt: string | null
          publicId: string
          secureURL: string
          title: string
          transformationType: string
          transformationUrl: string | null
          updatedAt: string
          width: number | null
        }
        Insert: {
          aspectRatio?: string | null
          authorId: string
          color?: string | null
          config?: Json | null
          createdAt?: string
          height?: number | null
          id: string
          prompt?: string | null
          publicId: string
          secureURL: string
          title: string
          transformationType: string
          transformationUrl?: string | null
          updatedAt: string
          width?: number | null
        }
        Update: {
          aspectRatio?: string | null
          authorId?: string
          color?: string | null
          config?: Json | null
          createdAt?: string
          height?: number | null
          id?: string
          prompt?: string | null
          publicId?: string
          secureURL?: string
          title?: string
          transformationType?: string
          transformationUrl?: string | null
          updatedAt?: string
          width?: number | null
        }
        Relationships: []
      }
      Invitation: {
        Row: {
          agencyId: string
          email: string
          id: string
          role: Database["public"]["Enums"]["Role"]
          status: Database["public"]["Enums"]["InvitationStatus"]
        }
        Insert: {
          agencyId: string
          email: string
          id: string
          role?: Database["public"]["Enums"]["Role"]
          status?: Database["public"]["Enums"]["InvitationStatus"]
        }
        Update: {
          agencyId?: string
          email?: string
          id?: string
          role?: Database["public"]["Enums"]["Role"]
          status?: Database["public"]["Enums"]["InvitationStatus"]
        }
        Relationships: []
      }
      Lane: {
        Row: {
          createdAt: string
          id: string
          name: string
          order: number
          pipelineId: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id: string
          name: string
          order?: number
          pipelineId: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: string
          name?: string
          order?: number
          pipelineId?: string
          updatedAt?: string
        }
        Relationships: []
      }
      List: {
        Row: {
          boardId: string
          createdAt: string
          id: string
          order: number
          title: string
          updatedAt: string
        }
        Insert: {
          boardId: string
          createdAt?: string
          id: string
          order: number
          title: string
          updatedAt: string
        }
        Update: {
          boardId?: string
          createdAt?: string
          id?: string
          order?: number
          title?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Media: {
        Row: {
          createdAt: string
          id: string
          link: string
          name: string
          subAccountId: string
          type: string | null
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id: string
          link: string
          name: string
          subAccountId: string
          type?: string | null
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: string
          link?: string
          name?: string
          subAccountId?: string
          type?: string | null
          updatedAt?: string
        }
        Relationships: []
      }
      Notification: {
        Row: {
          agencyId: string
          createdAt: string
          id: string
          notification: string
          subAccountId: string | null
          updatedAt: string
          userId: string
        }
        Insert: {
          agencyId: string
          createdAt?: string
          id: string
          notification: string
          subAccountId?: string | null
          updatedAt: string
          userId: string
        }
        Update: {
          agencyId?: string
          createdAt?: string
          id?: string
          notification?: string
          subAccountId?: string | null
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
      OrgLimit: {
        Row: {
          count: number
          createdAt: string
          id: string
          orgId: string
          updatedAt: string
        }
        Insert: {
          count?: number
          createdAt?: string
          id: string
          orgId: string
          updatedAt: string
        }
        Update: {
          count?: number
          createdAt?: string
          id?: string
          orgId?: string
          updatedAt?: string
        }
        Relationships: []
      }
      OrgSubscription: {
        Row: {
          id: string
          orgId: string
          stripe_current_period_end: string | null
          stripe_customer_id: string | null
          stripe_price_id: string | null
          stripe_subscription_id: string | null
        }
        Insert: {
          id: string
          orgId: string
          stripe_current_period_end?: string | null
          stripe_customer_id?: string | null
          stripe_price_id?: string | null
          stripe_subscription_id?: string | null
        }
        Update: {
          id?: string
          orgId?: string
          stripe_current_period_end?: string | null
          stripe_customer_id?: string | null
          stripe_price_id?: string | null
          stripe_subscription_id?: string | null
        }
        Relationships: []
      }
      Permissions: {
        Row: {
          access: boolean
          email: string
          id: string
          subAccountId: string
        }
        Insert: {
          access: boolean
          email: string
          id: string
          subAccountId: string
        }
        Update: {
          access?: boolean
          email?: string
          id?: string
          subAccountId?: string
        }
        Relationships: []
      }
      Pipeline: {
        Row: {
          createdAt: string
          id: string
          name: string
          subAccountId: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id: string
          name: string
          subAccountId: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: string
          name?: string
          subAccountId?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Project: {
        Row: {
          createdAt: string
          description: string
          id: string
          organizationId: string
          status: string
          title: string
          updatedAt: string
          userId: string
        }
        Insert: {
          createdAt?: string
          description: string
          id: string
          organizationId: string
          status?: string
          title: string
          updatedAt: string
          userId: string
        }
        Update: {
          createdAt?: string
          description?: string
          id?: string
          organizationId?: string
          status?: string
          title?: string
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
      SubAccount: {
        Row: {
          address: string
          agencyId: string
          city: string
          companyEmail: string
          companyPhone: string
          connectAccountId: string | null
          country: string
          createdAt: string
          creditBalance: number
          goal: number
          id: string
          name: string
          state: string
          subAccountLogo: string
          updatedAt: string
          zipCode: string
        }
        Insert: {
          address: string
          agencyId: string
          city: string
          companyEmail: string
          companyPhone: string
          connectAccountId?: string | null
          country: string
          createdAt?: string
          creditBalance?: number
          goal?: number
          id: string
          name: string
          state: string
          subAccountLogo: string
          updatedAt: string
          zipCode: string
        }
        Update: {
          address?: string
          agencyId?: string
          city?: string
          companyEmail?: string
          companyPhone?: string
          connectAccountId?: string | null
          country?: string
          createdAt?: string
          creditBalance?: number
          goal?: number
          id?: string
          name?: string
          state?: string
          subAccountLogo?: string
          updatedAt?: string
          zipCode?: string
        }
        Relationships: []
      }
      SubAccountSidebarOption: {
        Row: {
          createdAt: string
          icon: Database["public"]["Enums"]["Icon"]
          id: string
          link: string
          name: string
          subAccountId: string | null
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          icon?: Database["public"]["Enums"]["Icon"]
          id: string
          link?: string
          name?: string
          subAccountId?: string | null
          updatedAt: string
        }
        Update: {
          createdAt?: string
          icon?: Database["public"]["Enums"]["Icon"]
          id?: string
          link?: string
          name?: string
          subAccountId?: string | null
          updatedAt?: string
        }
        Relationships: []
      }
      Subscription: {
        Row: {
          active: boolean
          agencyId: string | null
          createdAt: string
          currentPeriodEndDate: string
          customerId: string
          id: string
          plan: Database["public"]["Enums"]["Plan"] | null
          price: string | null
          priceId: string
          subscritiptionId: string
          updatedAt: string
        }
        Insert: {
          active?: boolean
          agencyId?: string | null
          createdAt?: string
          currentPeriodEndDate: string
          customerId: string
          id: string
          plan?: Database["public"]["Enums"]["Plan"] | null
          price?: string | null
          priceId: string
          subscritiptionId: string
          updatedAt: string
        }
        Update: {
          active?: boolean
          agencyId?: string | null
          createdAt?: string
          currentPeriodEndDate?: string
          customerId?: string
          id?: string
          plan?: Database["public"]["Enums"]["Plan"] | null
          price?: string | null
          priceId?: string
          subscritiptionId?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Tag: {
        Row: {
          color: string
          createdAt: string
          id: string
          name: string
          subAccountId: string
          updatedAt: string
        }
        Insert: {
          color: string
          createdAt?: string
          id: string
          name: string
          subAccountId: string
          updatedAt: string
        }
        Update: {
          color?: string
          createdAt?: string
          id?: string
          name?: string
          subAccountId?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Ticket: {
        Row: {
          assignedUserId: string | null
          createdAt: string
          customerId: string | null
          description: string | null
          id: string
          laneId: string
          name: string
          order: number
          updatedAt: string
          value: number | null
        }
        Insert: {
          assignedUserId?: string | null
          createdAt?: string
          customerId?: string | null
          description?: string | null
          id: string
          laneId: string
          name: string
          order?: number
          updatedAt: string
          value?: number | null
        }
        Update: {
          assignedUserId?: string | null
          createdAt?: string
          customerId?: string | null
          description?: string | null
          id?: string
          laneId?: string
          name?: string
          order?: number
          updatedAt?: string
          value?: number | null
        }
        Relationships: []
      }
      Trigger: {
        Row: {
          createdAt: string
          id: string
          name: string
          subAccountId: string
          type: Database["public"]["Enums"]["TriggerTypes"]
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id: string
          name: string
          subAccountId: string
          type: Database["public"]["Enums"]["TriggerTypes"]
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: string
          name?: string
          subAccountId?: string
          type?: Database["public"]["Enums"]["TriggerTypes"]
          updatedAt?: string
        }
        Relationships: []
      }
      User: {
        Row: {
          agencyId: string | null
          avatarUrl: string
          createdAt: string
          email: string
          id: string
          name: string
          role: Database["public"]["Enums"]["Role"]
          updatedAt: string
        }
        Insert: {
          agencyId?: string | null
          avatarUrl: string
          createdAt?: string
          email: string
          id: string
          name: string
          role?: Database["public"]["Enums"]["Role"]
          updatedAt: string
        }
        Update: {
          agencyId?: string | null
          avatarUrl?: string
          createdAt?: string
          email?: string
          id?: string
          name?: string
          role?: Database["public"]["Enums"]["Role"]
          updatedAt?: string
        }
        Relationships: []
      }
      UserMeta: {
        Row: {
          auth: string
          createdAt: string
          endpoint: string
          id: string
          p256dh: string
          updatedAt: string
          userId: string
        }
        Insert: {
          auth: string
          createdAt?: string
          endpoint: string
          id: string
          p256dh: string
          updatedAt: string
          userId: string
        }
        Update: {
          auth?: string
          createdAt?: string
          endpoint?: string
          id?: string
          p256dh?: string
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
      UserThread: {
        Row: {
          createdAt: string
          id: string
          threadId: string
          userId: string
        }
        Insert: {
          createdAt?: string
          id: string
          threadId: string
          userId: string
        }
        Update: {
          createdAt?: string
          id?: string
          threadId?: string
          userId?: string
        }
        Relationships: []
      }
      WaitlistUser: {
        Row: {
          createdAt: string
          email: string
          id: string
          name: string
          phone_number: string
          platform: string
          region: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          email: string
          id: string
          name: string
          phone_number: string
          platform: string
          region: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          email?: string
          id?: string
          name?: string
          phone_number?: string
          platform?: string
          region?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Workspace: {
        Row: {
          active: boolean
          createdAt: string
          id: string
          isPremium: boolean
          name: string
          updatedAt: string
          userId: string
        }
        Insert: {
          active?: boolean
          createdAt?: string
          id: string
          isPremium?: boolean
          name: string
          updatedAt: string
          userId: string
        }
        Update: {
          active?: boolean
          createdAt?: string
          id?: string
          isPremium?: boolean
          name?: string
          updatedAt?: string
          userId?: string
        }
        Relationships: []
      }
      WorkspaceMember: {
        Row: {
          createdAt: string
          id: string
          updatedAt: string
          userId: string
          workspaceId: string
        }
        Insert: {
          createdAt?: string
          id: string
          updatedAt: string
          userId: string
          workspaceId: string
        }
        Update: {
          createdAt?: string
          id?: string
          updatedAt?: string
          userId?: string
          workspaceId?: string
        }
        Relationships: []
      }
      WorkspaceProject: {
        Row: {
          banner_url: string | null
          createdAt: string
          description: string | null
          endDate: string | null
          id: string
          photo_url: string | null
          startDate: string | null
          status: string
          title: string
          updatedAt: string
          workspaceId: string
        }
        Insert: {
          banner_url?: string | null
          createdAt?: string
          description?: string | null
          endDate?: string | null
          id: string
          photo_url?: string | null
          startDate?: string | null
          status?: string
          title: string
          updatedAt: string
          workspaceId: string
        }
        Update: {
          banner_url?: string | null
          createdAt?: string
          description?: string | null
          endDate?: string | null
          id?: string
          photo_url?: string | null
          startDate?: string | null
          status?: string
          title?: string
          updatedAt?: string
          workspaceId?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      ACTION: "CREATE" | "UPDATE" | "DELETE"
      ActionType: "CREATE_CONTACT"
      ENTITY_TYPE: "BOARD" | "LIST" | "CARD"
      Icon:
        | "settings"
        | "chart"
        | "calendar"
        | "check"
        | "chip"
        | "compass"
        | "database"
        | "flag"
        | "home"
        | "info"
        | "link"
        | "lock"
        | "messages"
        | "notification"
        | "payment"
        | "power"
        | "receipt"
        | "shield"
        | "star"
        | "tune"
        | "videorecorder"
        | "wallet"
        | "warning"
        | "headphone"
        | "send"
        | "pipelines"
        | "person"
        | "category"
        | "contact"
        | "clipboardIcon"
      InvitationStatus: "ACCEPTED" | "REVOKED" | "PENDING"
      Plan: "price_1OeLzeAc1fPHZF54HoJyA4Fi" | "price_1OeLzeAc1fPHZF548aR2vu6B"
      Role:
        | "AGENCY_OWNER"
        | "AGENCY_ADMIN"
        | "SUBACCOUNT_USER"
        | "SUBACCOUNT_GUEST"
      TriggerTypes: "CONTACT_FORM"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

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
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

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
    : never
