import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Tooltip,
  IconButton,
  TextField,
} from "@mui/material";
import GlassSurface from "../components/GlassSurface";
import BlurText from "../components/BlurText";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

interface ContactProps {
  isMobile: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isMobile }) => {
  // Contact form state
  const [contactName, setContactName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactMessage, setContactMessage] = useState<string>("");
  const [sending, setSending] = useState<boolean>(false);
  const [sendSuccess, setSendSuccess] = useState<boolean | null>(null);
  const [sendError, setSendError] = useState<string | null>(null);

  // Contact form submit handler
  const handleContactSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    setSending(true);
    setSendError(null);
    setSendSuccess(null);

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

    // Basic validation
    if (!contactName || !contactEmail || !contactMessage) {
      setSendError("Please fill in all fields.");
      setSending(false);
      return;
    }

    try {
      if (endpoint) {
        // Send to Formspree
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: contactName,
            email: contactEmail,
            message: contactMessage,
          }),
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Send failed: ${res.status} ${text}`);
        }

        setSendSuccess(true);
        setContactName("");
        setContactEmail("");
        setContactMessage("");
      } else {
        // Fallback to mailto
        const subject = encodeURIComponent(
          `Portfolio message from ${contactName}`
        );
        const body = encodeURIComponent(
          `${contactMessage}\n\nFrom: ${contactName} <${contactEmail}>`
        );
        window.location.href = `mailto:adamgustin@me.com?subject=${subject}&body=${body}`;
        setSendSuccess(true);
      }
    } catch (err: unknown) {
      const message =
        err && typeof err === "object" && "message" in err
          ? (err as { message?: string }).message
          : String(err);
      setSendError(message || "An error occurred while sending message.");
      setSendSuccess(false);
    } finally {
      setSending(false);
    }
  };

  return (
    <Box
      id="Contact"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          alignSelf: "flex-start",
          textAlign: "center",
          mx: "auto",
          fontWeight: 700,
          mb: isMobile ? 5 : 8,
        }}
      >
        <BlurText
          text="Contact Me"
          delay={150}
          animateBy="letters"
          direction="top"
        />
      </Typography>
      <GlassSurface width={"auto"} height={550} borderRadius={24}>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            width: "100%",
            maxWidth: 400,
            mr: 5,
            ml: 5,
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
          <Typography variant="h6">
            Feel free to reach out via the form below.
          </Typography>
          <Box
            component="form"
            onSubmit={handleContactSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 2,
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              required
              fullWidth
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              required
              fullWidth
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
            <TextField
              label="Message"
              name="message"
              variant="outlined"
              required
              fullWidth
              multiline
              rows={5}
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
            />
            {sendError && (
              <Typography variant="body2" color="error">
                {sendError}
              </Typography>
            )}
            {sendSuccess && (
              <Typography variant="body2" color="success.main">
                Message sent — thank you!
              </Typography>
            )}
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              sx={{
                mt: 2,
              }}
              disabled={sending}
            >
              {sending ? "Sending…" : "Send Message"}
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Tooltip title="GitHub">
                <IconButton
                  component="a"
                  href="https://github.com/a97g"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.primary",
                    transition: "color 0.3s, transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  <SiGithub size={28} />
                </IconButton>
              </Tooltip>

              <Tooltip title="LinkedIn">
                <IconButton
                  component="a"
                  href="https://linkedin.com/in/adamgustin"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.primary",
                    transition: "color 0.3s, transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  <SiLinkedin size={28} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Email">
                <IconButton
                  component="a"
                  href="mailto:adamgustin@me.com"
                  sx={{
                    color: "text.primary",
                    transition: "color 0.3s, transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  <SiGmail size={28} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </GlassSurface>
    </Box>
  );
};

export default Contact;
