import React, { useState, useEffect } from 'react';
import { tokens } from "../../theme";
import { Box, Typography, CircularProgress, useTheme, List, ListItem } from '@mui/material';

const UserActivities = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography color="error">{`Error: ${error}`}</Typography>
      </Box>
    );
  }

  return (
    <Box p={3} m="40px 0 0 0">
      {posts.length > 0 ? (
        <Box>
          <Typography variant="h3" gutterBottom>
            Posts by User
          </Typography>
          <List>
            {posts.map(post => (
              <ListItem key={post.id} sx={{ mb: 2, border: `1px solid ${colors.secondary[200]}`, borderRadius: '8px', p: 2, backgroundColor: colors.background.default, boxShadow: 1 }}>
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    {post.title}
                  </Typography>
                  <Typography variant="body1" mt={1}>
                    {post.body}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      ) : (
        <Typography>No posts available</Typography>
      )}
    </Box>
  );
};

export default UserActivities;
