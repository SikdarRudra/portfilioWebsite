import Certificate from "../models/certificates.model.js";

export const addCertificate = async (req, res) => {
  try {
    const { year, month, title, subtitle, description,link } = req.body;

    if (
      Object.values({ year, month, title, subtitle, description,link })
        .some(v => !v?.toString().trim())
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const certificate = await Certificate.create({
      year,
      month,
      title,
      subtitle,
      description,
      link
    });

    res.status(201).json({
      success: true,
      message: "Certificate added successfully",
      certificate,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({ year: -1, createdAt: -1 });

    res.json({
      success: true,
      count: certificates.length,
      certificates,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getCertificateById = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id);

    if (!certificate) {
      return res.status(404).json({
        success: false,
        message: "Certificate not found",
      });
    }

    res.json({
      success: true,
      certificate,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!certificate) {
      return res.status(404).json({
        success: false,
        message: "Certificate not found",
      });
    }

    res.json({
      success: true,
      message: "Certificate updated successfully",
      certificate,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findByIdAndDelete(req.params.id);

    if (!certificate) {
      return res.status(404).json({
        success: false,
        message: "Certificate not found",
      });
    }

    res.json({
      success: true,
      message: "Certificate deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
