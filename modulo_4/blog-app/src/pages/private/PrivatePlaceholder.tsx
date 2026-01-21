import { Typography } from "@mui/material";

interface PrivatePlaceholderProps {
  title: string;
}

export default function PrivatePlaceholder({ title }: PrivatePlaceholderProps) {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {title} Page
      </Typography>
      <Typography variant="body1">
        This is a placeholder for the {title.toLowerCase()} page. Content coming soon!
      </Typography>
    </div>
  );
}
