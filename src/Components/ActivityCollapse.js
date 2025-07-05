import { Collapse, Box, Typography, useTheme } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import dayjs from 'dayjs';
import { forwardRef } from 'react';

const ActivityCollapse = forwardRef(function ActivityCollapse({ row, open }, ref) {
  const theme = useTheme();

  const logs = row.activityLogs || [];

  const chartData = logs.map((log) => ({
    x: dayjs(log.timestamp).format('HH:mm'),
    y: dayjs(log.timestamp).format('DD/MM/YYYY'),
  }));

  const xLabels = chartData.map((d) => d.x);
  const yMap = {};
  const yData = chartData.map((d) => {
    if (!(d.y in yMap)) {
      yMap[d.y] = Object.keys(yMap).length + 1;
    }
    return yMap[d.y];
  });

  return (
    <div ref={ref}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box
          sx={{
            bgcolor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            p: 2,
            mx: 2,
            borderBottom: `1px solid ${theme.palette.divider}`,
            mt: 2,
          }}
        >
          <Typography variant="subtitle1" gutterBottom>
            Activity Logs for {row.name}
          </Typography>
          <ul style={{ paddingLeft: '1rem' }}>
            {logs.map((log, index) => (
              <li key={index}>
                <strong>{log.timestamp}</strong> — {log.action} via {log.device} (IP: {log.ip})
              </li>
            ))}
          </ul>

          <LineChart
            xAxis={[
              {
                data: xLabels,
                scaleType: 'band',
                label: 'Time',
              },
            ]}
            yAxis={[
              {
                data: Object.values(yMap),
                label: 'Date',
                valueFormatter: (val) => {
                  const entry = Object.entries(yMap).find(([_, v]) => v === val);
                  return entry ? entry[0] : '';
                },
              },
            ]}
            series={[
              {
                data: yData,
              },
            ]}
            height={300}
          />
        </Box>
      </Collapse>
    </div>
  );
});

export default ActivityCollapse;
